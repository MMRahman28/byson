// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';



//import { connect } from 'react-redux';
//import {removeExpense} from '../actions/expenses';
//numeral.locale('en-gb');
const PoemItem = ({id, note, createdAt}) => (
 <div>
 <Link to={`/edit/${id}`}>
 <h3>Edit</h3>
 </Link>
   <p>{note} - {moment(createdAt).format('Do MMMM, YYYY')}</p>

  </div>
);


//export default connect()(ExpenseListItem);
export default PoemItem;
