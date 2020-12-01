import React from 'react';
import { Tracklist } from '../Tracklist/Tracklist.components';
import PropTypes from 'prop-types';
import './Playlist.components.css';

export const Playlist = props => {
    const handleNameChange = ({ target }) => {
        props.onNameChange(target.value);
        window.sessionStorage.setItem('playlistName', target.value)
    }
    return (
        <div className="Playlist">
            <input onChange={handleNameChange} value={window.sessionStorage.getItem('playlistName') || props.playlistName} />
            <Tracklist isRemoval={true} onRemove={props.onRemove} playlistTracks={props.playlistTracks} />
            <button onClick={props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            <button onClick={props.onClear} className="Playlist-clear">CLEAR PLAYLIST</button>
        </div>
    )
}

Playlist.propType = {
    onNameChange: PropTypes.func,
    playlistName: PropTypes.string,
    playlistTracks: PropTypes.array,
    onRemove: PropTypes.func,
    onSave: PropTypes.func,
    onClear: PropTypes.func
}