const api = () => {
  fetch('https://swapi.co/api/films', {
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  }).then(res => res.json()).then(data => console.log(data));

};

export default api;
