import React from 'react';
import { Tracklist } from '../components/Tracklist/Tracklist.components';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Track } from '../components/Track/Track.components';


describe('Tracklist Component', () => {
    test('renders Tracklist component', () => {
        shallow(<Tracklist />);
    });
    describe('check required components are present', () => {
        const tracklistProps = {
            searchResults: [{
                artist: 'Burna',
                name: 'African Giant',
                album: 'Twice As Tall',
                id: 1
            }, {
                artist: 'Burna',
                name: 'African Giant',
                album: 'Twice As Tall',
                id: 2
            }],
            playlistTracks: [{
                artist: 'Burna',
                name: 'African Giant',
                album: 'Twice As Tall',
                id: 1
            }, {
                artist: 'Burna',
                name: 'African Giant',
                album: 'Twice As Tall',
                id: 2
            }]
        }
        test('check children components are rendered if one or both property is passed', () => {
            const wrapper = shallow(<Tracklist {...tracklistProps} />)
            const childrenComponents = wrapper.containsAllMatchingElements([<Track />])
            expect(childrenComponents).toEqual(true);
        })
        test('check children components are not rendered if no property is not passed', () => {
            const wrapper = shallow(<Tracklist />)
            const childrenComponents = wrapper.containsAllMatchingElements([<Track />])
            expect(childrenComponents).toEqual(false);
        })
    })
    // describe('make snapshot of Tracklist component', () => {
    //   test('matches the snapshot', () => {
    //     let tree = renderer.create(<Tracklist />).toJSON()
    //     expect(tree).toMatchSnapshot();
    //   })
    // })
})