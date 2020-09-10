import React from 'react';
//import ExpenseForm from './ExpenseForm';
//import {connect } from 'react-redux';
//import { setPoem } from '../actions/poems';
import RandomPoems from './RandomPoems';
import PoemFilters from './PoemFilters';


const PoemsPage = () => (
  <div>
  <PoemFilters />
   <RandomPoems />
   </div>
);
export default PoemsPage;
