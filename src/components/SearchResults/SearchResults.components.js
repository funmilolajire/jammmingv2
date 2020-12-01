import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.components.css';
import { Tracklist } from '../Tracklist/Tracklist.components';

export const SearchResults = props => {
    return (
        <section className="SearchResults">
            <h2>Results</h2>
            <Tracklist isRemoval={false} onAdd={props.onAdd} searchResults={props.searchResults} />
        </section>
    )
}

SearchResults.propTypes = {
    searchResults: PropTypes.array,
    onAdd: PropTypes.func
}