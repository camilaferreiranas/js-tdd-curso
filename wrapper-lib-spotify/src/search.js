function searcher(type, query) {
  return this.request(`${this.apiURL}/search?=q${query}&type=${type}`)
}

export default function search() {
  return {
    artists: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'albums'),
    tracks: searcher.bind(this, 'tracks'),
    playlists: searcher.bind(this, 'playlists'),
  }
}
