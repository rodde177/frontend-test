import React, { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};
export default SearchBar;
