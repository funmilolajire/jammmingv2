import React, { useState } from 'react';
import './Track.components.css';
import PropTypes from 'prop-types';

export const Track = props => {
    const renderAction = () => props.isRemoval ? '-' : '+';
    const addTrack = () => props.onAdd(props.track);
    const removeTrack = () => props.onRemove(props.track)

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(prev => !prev)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name} {props.track.preview &&
                    <small tabIndex={0} role='button' style={{ cursor: "pointer" }}
                        onKeyDown={({ key }) => key === 'Enter' ? handleClick() : ''}
                        onClick={handleClick}>{!clicked ? "| click to preview ▶" : "| click to stop preview ⏹"}
                    </small>}
                </h3>
                <p>{props.track.artist} | {props.track.album}</p>
                {clicked && props.track.preview && <audio autoPlay src={props.track.preview}></audio>}
            </div>
            <button tabIndex={0} className="Track-action" onClick={props.isRemoval ? removeTrack : addTrack}>
                {renderAction()}
            </button>
        </div>
    )
}

Track.propTypes = {
    isRemoval: PropTypes.bool,
    track: PropTypes.object,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func
}