import React, { useEffect, useState } from 'react';
import wikipedia from '../api/wikipedia';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchWikipedia = async () => {
            const { data } = await wikipedia.get('', {
                params: {
                    srsearch: searchText,
                },
            });
            setResults(data.query.search);
        };
        if (searchText) {
            searchWikipedia(searchText);
        }
    }, [searchText]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    {result.snippet}
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
