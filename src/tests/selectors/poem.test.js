import selectPoems from '../../selectors/poems';
import poems from '../fixtures/poems';
import moment from 'moment';

test('should filter by text value', () => {
  const filters = {
    note: 'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectPoems(poems, filters);

  expect(result).toEqual([ poems[0], poems[1]]);

});
test('should filter by startDate', () => {
  const filters = {
    note: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectPoems(poems, filters);
  expect(result).toEqual([poems[4], poems[3], poems[2], poems[0]]);
});

// should filter by endDate
test('should filter by endDate', () => {
  const filters = {
    note: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectPoems(poems, filters);
  expect(result).toEqual([poems[0], poems[1]]);
});
