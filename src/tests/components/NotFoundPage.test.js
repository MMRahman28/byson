import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<NotFoundPage />);
  //expect(wrapper.find('h1').text()).toBe('Poems');
  expect(wrapper).toMatchSnapshot();
  });
