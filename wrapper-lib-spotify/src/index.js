import search from './search'
import album from './album'

import API_URL from './config'
import toJSON from './util'


export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      header: {
        Authorization: `'Bearer ${this.token}'`
      },
    };

    return fetch(url, headers).then(toJSON)
  }
}
