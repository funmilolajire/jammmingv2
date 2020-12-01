import React from 'react';
import { Playlist } from '../components/Playlist/Playlist.components';

import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import { Tracklist } from '../components/Tracklist/Tracklist.components';


describe('Playlist Component', () => {
    test('renders Playlist component', () => {
        shallow(<Playlist />);
    });
    describe('Check text contents', () => {
        const wrapper = shallow(<Playlist />);
        test('check that button text contains Spotify', () => {
            let buttonText = wrapper.find('button.Playlist-save').text()
            let buttonRegex = new RegExp('spotify', 'i')
            expect(buttonText).toMatch(buttonRegex)
        })
    })
    describe('Check required components are present', () => {
        const wrapper = shallow(<Playlist />)
        test('children components', () => {
            let childrenComponents = wrapper.containsAllMatchingElements([<Tracklist />]);
            expect(childrenComponents).toEqual(true);
        })
    })
    // describe('make snapshot of Playlist component', () => {
    //   test('matches the snapshot', () => {
    //     let tree = renderer.create(<Playlist />).toJSON()
    //     expect(tree).toMatchSnapshot();
    //   })
    // })
})