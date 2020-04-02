import React from 'react';
import api from './api';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  api('https://swapi.co/api/films').then(data => console.log(data.results));
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
