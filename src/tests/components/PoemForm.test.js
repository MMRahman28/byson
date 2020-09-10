import React from 'react';
import { shallow } from 'enzyme';
import PoemForm from '../../components/PoemForm';
import poems from '../fixtures/poems';
import moment from 'moment';

test('should render PoemForm correctly', () => {
  const wrapper = shallow(<PoemForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render PoemForm correctly with poem data', () => {
  const wrapper = shallow(<PoemForm  poem={poems[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<PoemForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
  const value = 'New note';
  const wrapper = shallow(<PoemForm />);
  wrapper.find('textarea').simulate('change', {
    target:{ value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<PoemForm poem={poems[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    note: poems[0].note,
    createdAt: poems[0].createdAt
  });
});
test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<PoemForm />);
  //expect(wrapper.find('SingleDatePicker')).to.have.lengthOf(1);
  wrapper.find('form').childAt(2).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<PoemForm />);
  wrapper.find('form').childAt(2).prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);

});
