import * as React from 'react';
import Box from '@mui/material/Box';
import './SearchBar.css'

export default function SearchBar(props) {

  return (
    <div>
        <input
            onChange={(event) => {
                props.setSearchData(event.target.value)
            }}
            placeholder="Search"
            id="search-bar"
        />
    </div>
  );
}