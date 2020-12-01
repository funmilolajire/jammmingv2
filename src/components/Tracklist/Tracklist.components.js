import React from 'react';
import './Tracklist.components.css';
import { Track } from '../Track/Track.components';
import PropTypes from 'prop-types';

export const Tracklist = props => {
    return (
        <div className="TrackList">
            {props.searchResults && props.searchResults.map(track => <Track isRemoval={props.isRemoval} onAdd={props.onAdd} key={track.id} track={track} />)}
            {props.playlistTracks && props.playlistTracks.map(track => <Track isRemoval={props.isRemoval} onRemove={props.onRemove} key={track.id} track={track} />)}
        </div>
    )
}

Tracklist.propTypes = {
    searchResults: PropTypes.array,
    playlistTracks: PropTypes.array,
    isRemoval: PropTypes.bool,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func
}