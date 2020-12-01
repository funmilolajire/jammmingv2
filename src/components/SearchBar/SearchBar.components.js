import React, { useState } from 'react';
import './SearchBar.components.css';

export const SearchBar = props => {
    const [term, setTerm] = useState('');
    const handleTermChange = ({ target }) => {
        setTerm(target.value)
        window.sessionStorage.setItem('term', target.value)
    }
    const search = () => {
        props.onSearch(window.sessionStorage.getItem('term') || term)
        window.sessionStorage.setItem('term', '')
    }
    return (
        <div onKeyDown={({ key }) => key === 'Enter' ? search() : ''} className="SearchBar">
            <input role='searchbox' value={window.sessionStorage.getItem('term') || term} onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button onClick={search} className="SearchButton">SEARCH</button>
        </div>
    )
}