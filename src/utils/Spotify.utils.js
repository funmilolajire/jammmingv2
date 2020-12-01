// import { encode as base64encode } from 'base64-arraybuffer';
import axios from 'axios';
const cryptoRandomString = require('crypto-random-string/index');
const clientID = 'cdef731b0b1440abad772c058cf2ef89';
const redirectURI = 'http:%2F%2Flocalhost:3000%2F'; //TODO: Change to new deployed location
let userAccessToken = '';
let expiresIn = 0;
// let pkceCode = '';
// const codeVerifier = cryptoRandomString({ length: 128 });
const state = cryptoRandomString({ length: 14, type: 'alphanumeric' });
// const generateCodeChallenge = async codeString => {
//     try {
//         const encoder = new TextEncoder();
//         const data = encoder.encode(codeString);
//         const digest = await window.crypto.subtle.digest("SHA-256", data);
//         const base64Digest = base64encode(digest);
//         return base64Digest.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
//     }
//     catch (e) { console.log(e) }
// }
// const codeChallenge = generateCodeChallenge(codeVerifier).then(challenge => challenge);

export const Spotify = {
    getAccessToken() {
        if (userAccessToken) {
            return userAccessToken
        } else if (!userAccessToken && window.location.href.match(/access_token=([^&]*)/)) {
            userAccessToken = window.location.href.match(/access_token=([^&]*)/)[0].split("=")[1]
            expiresIn = Number(window.location.href.match(/expires_in=([^&]*)/)[0].split("=")[1]) * 1000;
            window.history.pushState('Access Token', null, '/');
            window.setTimeout(() => userAccessToken = '', expiresIn);
            return userAccessToken
        } else {
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&state=${state}&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
    },
    accessTokenExpires() {
        return expiresIn;
    },
    // getCode() {
    //     if (!window.location.href.match(/code=([^&]*)/)) {
    //         window.location.href = `https://accounts.spotify.com/authorize?response_type=code&state=${state}&scope=user-follow-modify%20playlist-modify-public&client_id=${clientID}&redirect_uri=${redirectURI}&code_challenge=${codeChallenge}&code_challenge_method=S256`
    //     } else {
    //         pkceCode = window.location.href.match(/code=([^&]*)/);
    //         return pkceCode;
    //     }
    // },
    async search(term, accessToken) {
        const endpoint = 'https://api.spotify.com/v1/search';
        const response = await axios.get(endpoint, {
            params: {
                type: 'track',
                q: term
            },
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        if (!response.data) {
            return []
        } else {
            // return response.data.tracks.items;
            return response.data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
                preview: track.preview_url
            }))
        }
    },
    async savePlaylist(playlistName, tracksURIs, accessToken) {
        let userIdEndpoint = 'https://api.spotify.com/v1/me';

        const user = await axios.get(userIdEndpoint, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(response => ({
            id: response.data.id,
            name: response.data.display_name
        }))
        let playlistIdEndpoint = `https://api.spotify.com/v1/users/${user.id}/playlists`;
        const playlistId = await axios.post(playlistIdEndpoint, { name: playlistName }, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }).then(response => response.data.id);
        let addTracksEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        await axios.post(addTracksEndpoint, {
            "uris": tracksURIs
        }, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }).then(response => response)
    }
}