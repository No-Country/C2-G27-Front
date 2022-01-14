import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, InputGroupText } from 'reactstrap';

function SearchBar() {
  return (
    <div style={{ borderRadius: '10px' }}>
      <InputGroup  >
        <InputGroupText className='bg-danger' >
          <FaSearch style={{ color: 'white' }} />
        </InputGroupText>

        <Input
          style={{ backgroundColor: 'white', color: 'white' }}
          placeholder='Placeholder'
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
