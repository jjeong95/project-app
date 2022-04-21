import * as React from 'react';
import Box from '@mui/material/Box';

export default function SearchBar(props) {
  
  

  console.log(props);
  return (
    <div>
        <input
            onChange={(event) => {
                console.log(event.target.value, '11')
                console.log(props,'12')
                props.setSearchData(event.target.value)
            }}
        />
    </div>
  );
}