import React from 'react';
import { shallow } from 'enzyme';
import poems from '../fixtures/poems';
import { EditPoemPage } from '../../components/EditPoemPage';

let editPoem, startRemovePoem, history, wrapper;

beforeEach(() => {
  editPoem = jest.fn();
  startRemovePoem = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(

    <EditPoemPage
      editPoem={editPoem}
      startRemovePoem={startRemovePoem}
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

test('should handle startRemovePoem', () => {

  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemovePoem).toHaveBeenLastCalledWith({
    id: poems[2].id
  });
});
