import * as React from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types';

/**
 * Component for movie search bar
 */
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

SearchBar.propTypes = {
  setSearchData: PropTypes.func,
}