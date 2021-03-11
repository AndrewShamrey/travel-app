export default function fetchData(method, whatIsIt = '', lang = '', name = '', body = '', id = '') {
  if (method === 'GET') {
    return fetch(`https://travel-app-back-113.herokuapp.com/api/${whatIsIt}/${lang}/${name}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return fetch(`https://travel-app-back-113.herokuapp.com/api/${whatIsIt}/${id}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
