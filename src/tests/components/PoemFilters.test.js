import React from 'react';
import { shallow } from 'enzyme';
import { PoemFilters } from '../../components/PoemFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <PoemFilters
     filters = {filters}
     setTextFilter={setTextFilter}
     sortByDate={sortByDate}
     setStartDate={setStartDate}
     setEndDate={setEndDate}
    />
  );
});

test('should render PoemFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();

});

test('should render PoemFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();

});

test('should handle text change', () => {
  const value = 'A poem of change';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
  const value = 'date';
 wrapper.setProps({
   filters: altFilters
 });
 wrapper.find('select').simulate('change', {
   target: { value }
 });
expect(sortByDate).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
   wrapper.find('div').childAt(2).prop('onDatesChange')({startDate, endDate});
   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('div').childAt(2).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
