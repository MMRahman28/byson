import { setStartDate, setEndDate, setTextFilter, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set and end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter object with text value', () => {
  const note = 'A poem';
  const action = setTextFilter(note);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    note
  })
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    note: ''
  });

});

test('should generate sortByDate action object', () => {
  //another method
  //expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })

});
