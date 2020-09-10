import React from 'react';
import { shallow } from 'enzyme';
import poems from '../fixtures/poems';
import { EditPoemPage } from '../../components/EditPoemPage';

let editPoem, removePoem, history, wrapper;

beforeEach(() => {
  editPoem = jest.fn();
  removePoem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(

    <EditPoemPage
      editPoem={editPoem}
      removePoem={removePoem}
      history={history}
      poem={poems[2]}
      />


  );
});

test('should render EditPoemPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editPoem', () => {

  wrapper.find('PoemForm').prop('onSubmit')(poems[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editPoem).toHaveBeenLastCalledWith(poems[2].id, poems[2]);
});

test('should handle removePoem', () => {

  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removePoem).toHaveBeenLastCalledWith({
    id: poems[2].id
  });
});
