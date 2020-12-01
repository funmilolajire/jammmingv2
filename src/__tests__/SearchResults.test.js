import React from 'react';
import { SearchResults } from '../components/SearchResults/SearchResults.components';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Tracklist } from '../components/Tracklist/Tracklist.components';


describe('SearchResults Component', () => {
    test('renders SearchResults component', () => {
        shallow(<SearchResults />);
    });
    describe('check text contents', () => {
        const wrapper = shallow(<SearchResults />)
        test('check search results header text', () => {
            let h2Text = wrapper.find('h2').text();
            let h2TextRegex = new RegExp('results', 'i');
            expect(h2Text).toMatch(h2TextRegex);
        })
    })
    describe('check required components are present', () => {
        const wrapper = shallow(<SearchResults />)
        test('check children components', () => {
            const childrenComponents = wrapper.containsAllMatchingElements([<Tracklist />])
            expect(childrenComponents).toEqual(true);
        })
    })
    // describe('make snapshot of SearchResults component', () => {
    //   test('matches the snapshot', () => {
    //     let tree = renderer.create(<SearchResults />).toJSON()
    //     expect(tree).toMatchSnapshot();
    //   })
    // })
})