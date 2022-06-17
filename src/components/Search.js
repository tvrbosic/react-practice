import React, { useEffect, useState } from 'react';
import wikipedia from '../api/wikipedia';

const Search = () => {
    const [searchText, setSearchText] = useState('StarCraft');
    const [debounceSearchText, setDebounceSearchText] = useState(searchText);
    const [results, setResults] = useState([]);


    useEffect(() => {
        // API throttling
        const searchInputTimeout = setTimeout(() => {
            setDebounceSearchText(searchText);
        }, 500);

        // Clear timer in cleanup function
        return () => {
            clearTimeout(searchInputTimeout);
        };
    }, [searchText]);

    useEffect(() => {
        const searchWikipedia = async () => {
            const { data } = await wikipedia.get('', {
                params: {
                    srsearch: debounceSearchText,
                },
            });
            setResults(data.query.search);
        };

        searchWikipedia();
    }, [debounceSearchText]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: result.snippet,
                        }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        className='input'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
};

export default Search;
