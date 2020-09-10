import React from 'react';
import { shallow } from 'enzyme';
import { AddPoemPage } from '../../components/AddPoemPage';
import poems from '../fixtures/poems';

let startAddPoem, history, wrapper;

beforeEach(() => {
  startAddPoem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPoemPage startAddPoem={startAddPoem} history={history} />);
});

test('should render startAddPoemPage correctly', () => {

   expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {

  wrapper.find('PoemForm').prop('onSubmit')(poems[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddPoem).toHaveBeenLastCalledWith(poems[1]);
});
