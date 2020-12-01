import React from 'react';
import { Track } from '../components/Track/Track.components';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('Track Component', () => {
    const trackProps = {
        track: {
            name: 'Giant',
            artist: 'Burna',
            album: 'Tall',
            id: 1
        },
        isRemoval: true
    }
    test('renders Track component if track object is received', () => {
        shallow(<Track {...trackProps} />);
    });
    describe('check that button sign changes with the isRemoval property', () => {
        test('check that button is minus sign if isRemoval is true', () => {
            const wrapper = shallow(<Track {...trackProps} />)
            const buttonElement = wrapper.find('button.Track-action').text()
            expect(buttonElement).toBe('-')
        });
        test('check that button is plus sign if isRemoval is false', () => {
            trackProps.isRemoval = false;
            const wrapper = shallow(<Track {...trackProps} />)
            const buttonElement = wrapper.find('button.Track-action').text()
            expect(buttonElement).toBe('+')
        })
    })
    // describe('make snapshot of Track component', () => {
    //   test('matches the snapshot', () => {
    //     let tree = renderer.create(<Track />).toJSON()
    //     expect(tree).toMatchSnapshot();
    //   })
    // })
})