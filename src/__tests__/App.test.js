// import { render, screen } from '@testing-library/react';
import React from 'react';
import { App } from '../components/App/App.components';

import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import { SearchResults } from '../components/SearchResults/SearchResults.components';
import { SearchBar } from '../components/SearchBar/SearchBar.components';
import { Playlist } from '../components/Playlist/Playlist.components';


describe('App Component', () => {

  test('renders App component', () => {
    shallow(<App />);
  });
  describe('Check text contents', () => {
    const wrapper = shallow(<App />);
    test('check that header text is equal to Jammming', () => {
      let header = wrapper.find('h1').text()
      expect(header).toEqual('Jammming')
    })
  })
  describe('Check required components are present', () => {
    const wrapper = shallow(<App />)
    test('children components', () => {
      let childrenComponents = wrapper.containsAllMatchingElements([<SearchBar />, <SearchResults />, <Playlist />]);
      expect(childrenComponents).toEqual(true);
    })
  })
  // describe('make snapshot of App component', () => {
  //   test('matches the snapshot', () => {
  //     let tree = renderer.create(<App />).toJSON()
  //     expect(tree).toMatchSnapshot();
  //   })
  // })
})
