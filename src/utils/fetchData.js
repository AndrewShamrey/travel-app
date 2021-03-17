export default class FetchData {
  constructor(url) {
    this.baseUrl = url;
  }

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

  updateAvatar(id, body) {
    return this._defaultMethod('PATCH', 'persons', null, null, body, id);
  }

  _defaultMethod(method, path = '', name = '', pass = '', body = '', id = '') {
    if (method === 'GET') {
      return fetch(`${this.baseUrl}/${path}/${name}/${pass}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json());
    }

    return fetch(`${this.baseUrl}/${path}/${id}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
