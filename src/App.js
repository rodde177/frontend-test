import React, { Component, useState } from 'react';
import api from './api';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  const [list, setList] = useState([]);
  api('https://swapi.co/api/films').then(data => console.log(data.results));
  return <div>
    <SearchBar/>
  </div>;
};

export default App;
