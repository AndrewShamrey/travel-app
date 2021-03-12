export default class FetchData {
  getCountry(name, pass) {
    return this._defaultMethod('GET', 'countries', name, pass);
  }

  getPlacesByCountry(country) {
    return this._defaultMethod('GET', 'places', country);
  }

  getPersonByNameAndPass(name, pass) {
    return this._defaultMethod('GET', 'persons/one', name, pass);
  }

  postNewPerson(body) {
    return this._defaultMethod('POST', 'persons', null, null, body);
  }

  _defaultMethod(method, path='', name='', pass='', body='', id='') {
    if (method === 'GET') {
      return fetch(`https://travel-app-back-113.herokuapp.com/api/${path}/${name}/${pass}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return fetch(`https://travel-app-back-113.herokuapp.com/api/${path}/${id}`, {
      method: method,
      body: body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
