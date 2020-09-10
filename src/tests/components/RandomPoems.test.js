import React from 'react';
import { shallow } from 'enzyme';
import { RandomPoems } from '../../components/RandomPoems';
import poems from '../fixtures/poems';

test('should render RandomPoems with poems', () => {
  const wrapper = shallow(<RandomPoems poems={poems} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render RandomPoems with enmpty poems', () => {
  const wrapper = shallow(<RandomPoems poems={[]} />);
  expect(wrapper).toMatchSnapshot();
});
