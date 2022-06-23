import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit}) => {
    const [searchText, setSearchText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(searchText);
    };

    return ( 
        <div className='search-bar ui segment'>
            <form className='ui from' onSubmit={onSubmit}>
                <div className='field'>
                    <label>Video Search: </label>
                    <input
                        type='text'
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
