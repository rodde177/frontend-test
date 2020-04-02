const api = async url => {
  const res = await fetch(url, {
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'mode': 'no-cors'
  });
  const data = await res.json();
  return data;
};

export default api;
