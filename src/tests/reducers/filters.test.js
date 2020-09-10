import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    note: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// sort by date

test('should set sortBy to date', () => {

  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'

  };

  const action = { type: 'SORT_BY_DATE'};

  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');

});

// should set text filter

test('should set text filter', () => {
  const note = 'This is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    note
  };
  const state = filtersReducer(undefined, action);
  expect(state.note).toBe(note);
});

// should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment();

  const action = {type: 'SET_START_DATE', startDate};
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});
// should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment();
  const action = {type: 'SET_END_DATE', endDate};
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
