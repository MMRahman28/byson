import React from 'react';
import { shallow } from 'enzyme';
import poems from '../fixtures/poems';
import PoemItem from '../../components/PoemItem';

test('should render PoemItem correctly', () => {
  const wrapper = shallow(<PoemItem {...poems[0]} />);
  expect(wrapper).toMatchSnapshot();
});
