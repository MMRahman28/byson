import React from 'react';
import { shallow } from 'enzyme';
import PoemsPage from '../../components/PoemsPage';

test('should render PoemsPage correctly', () => {
  const wrapper = shallow(<PoemsPage />);
  expect(wrapper).toMatchSnapshot();
});
