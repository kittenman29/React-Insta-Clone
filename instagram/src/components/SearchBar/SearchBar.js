import React from 'react'


const SearchBar = props => {
    return (
        <div>
            <form>
                <input 
                type='search'
                name='search'
                value={props.username}
                onChange={props.searchPosts}
                placeholder='Search'
                />
            </form>
        </div>
    );
}

export default SearchBar;
