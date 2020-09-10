import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import React from 'react';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  //expect(wrapper.find('h1').text()).toBe('Poems');
  expect(wrapper).toMatchSnapshot();
  });
