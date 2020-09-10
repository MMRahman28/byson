
import moment from 'moment';

export default [

  {
  id: '1',
  note: 'Morning Poem',
  createdAt: 0
  },

  {
   id: '2',
   note: 'Afternoon Poem',
   createdAt: moment(0).subtract(4, 'days').valueOf()
  },

  {
   id: '3',
   note: 'Evening Poem',
   createdAt: moment(0).add(4, 'days').valueOf()
 },

 {
   id: '4',
   note: 'Night poem',
   createdAt: moment(0).add(7, 'days').valueOf()
 },

 {
   id: '5',
   note: 'Sunset poem',
   createdAt: moment(0).add(8, 'days').valueOf()
 }

];
