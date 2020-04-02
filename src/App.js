import React, { useState } from 'react';
import api from './api';

const App = () => {
  const [list, setList] = useState([]);
  api('https://swapi.co/api/films').then(data => console.log(data.results));
  return <div>hej</div>;
};

export default App;
