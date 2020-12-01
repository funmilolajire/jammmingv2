import React, { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar/SearchBar.components';
import { SearchResults } from '../SearchResults/SearchResults.components';
import { Playlist } from '../Playlist/Playlist.components';
import './App.components.css';
import { Spotify } from '../../utils/Spotify.utils';

export const App = props => {
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const updatePlaylistName = name => setPlaylistName(name);

  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState(JSON.parse(window.sessionStorage.getItem('playlistTracks')) || []);
  useEffect(() => {
    window.sessionStorage.setItem('playlistTracks', JSON.stringify(playlistTracks));
    // setPlaylistTracks(JSON.parse(window.sessionStorage.getItem('playlistTracks')))
  }, [playlistTracks])
  const addTrack = track => {
    let newTrack = !playlistTracks.includes(track) ? setPlaylistTracks(prev => [...prev, track]) : setPlaylistTracks(prev => [...prev])
    setSearchResults(prevTracks => prevTracks.filter(prevTrack => prevTrack !== track))
  };
  const removeTrack = track => {
    const trackId = track.id
    setPlaylistTracks(prevPlaylistTracks => prevPlaylistTracks.filter(prevTrack => prevTrack.id !== trackId))
    setSearchResults(prevTracks => [...prevTracks, track])
  };

  const [accessToken, setAccessToken] = useState('');
  const getSpotifyAccessToken = () => {
    setAccessToken(Spotify.getAccessToken())
    // let tokenExpiresIn = Spotify.accessTokenExpires();
    // console.log(tokenExpiresIn)
    let token = window.setTimeout(() => setAccessToken(''), 3000000)
  }
  useEffect(() => {
    getSpotifyAccessToken();
  }, [accessToken])

  const search = async term => {
    try {
      let token = accessToken ? accessToken : getSpotifyAccessToken();
      const tracks = await Spotify.search(term, accessToken);
      setSearchResults(tracks)
    }
    catch (e) { console.log(e) }
  };

  const [loading, setLoading] = useState(false);
  const savePlaylist = async () => {
    try {
      setLoading(true);
      let token = accessToken ? accessToken : getSpotifyAccessToken();
      const trackURIs = JSON.parse(window.sessionStorage.getItem('playlistTracks')).map(track => track.uri) || playlistTracks.map(track => track.uri);
      await Spotify.savePlaylist(window.sessionStorage.getItem('playlistName') || playlistName, trackURIs, accessToken);
      window.sessionStorage.setItem('playlistName', '')
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
      setLoading(false);
    }
    catch (e) { console.log(e) }
  }

  const clearPlaylist = () => {
    setPlaylistTracks([])
  }


  return (
    <section>
      {loading && <div className="pageLoading">
        <p>Saving Playlist</p>
      </div>}
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <p className="love"><small>made with ❤ by Funmilola O.</small></p>
      <section className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist onNameChange={updatePlaylistName} playlistTracks={playlistTracks} playlistName={playlistName} onRemove={removeTrack} onSave={savePlaylist} onClear={clearPlaylist} />
        </div>
      </section>
    </section>
  )
}
