import React from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar.components';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('SearchBar Component', () => {
    test('renders SearchBar component', () => {
        shallow(<SearchBar />);
    });
    describe('check text contents', () => {
        const wrapper = shallow(<SearchBar />)
        test('check placeholder text is present', () => {
            let inputPlaceholder = wrapper.find('.SearchBar input').at(0).props().placeholder;
            let placeholderRegex1 = new RegExp('song', 'i')
            let placeholderRegex2 = new RegExp('album', 'i')
            let placeholderRegex3 = new RegExp('artist', 'i')
            expect(inputPlaceholder).toMatch(placeholderRegex1 && placeholderRegex2 && placeholderRegex3);
        })
        test('check that searchbar button text is equal to search', () => {
            let buttonText = wrapper.find('button.SearchButton').text();
            let searchRegex = new RegExp('search', 'i');
            expect(buttonText).toMatch(searchRegex);
        })
    })
    // describe('make snapshot of SearchBar component', () => {
    //   test('matches the snapshot', () => {
    //     let tree = renderer.create(<SearchBar />).toJSON()
    //     expect(tree).toMatchSnapshot();
    //   })
    // })
})