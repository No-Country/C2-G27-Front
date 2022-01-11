import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, InputGroupText } from 'reactstrap';

function SearchBar() {
  return (
    <div>
      <InputGroup>
        <InputGroupText>
          <FaSearch />
        </InputGroupText>

        <Input
          style={{ backgroundColor: 'white', color: 'Black' }}
          placeholder='Placeholder'
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
