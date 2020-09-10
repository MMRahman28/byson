import moment from 'moment';

const filters = {
  note: '',
  sortBy: 'date',
  startDate:undefined,
  endDate: undefined
};

const altFilters = {
  note: 'A poem about filter',
  sortBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };
