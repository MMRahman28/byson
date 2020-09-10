import React from 'react';
//import ExpenseForm from './ExpenseForm';
import {connect } from 'react-redux';
import  PoemItem  from './PoemItem';
import selectPoems from '../selectors/poems';

export const RandomPoems = (props) => (
  <div>

     {
       props.poems.length === 0 ? (
         <p>No poems</p>
       ): (
         props.poems.map((poem) => {
           return <PoemItem key={poem.id} {...poem} />;
         })
       )
     }

  </div>
);

const mapStateToProps = (state) => {
  return {
    poems: selectPoems(state.poems, state.filters)
  };
};


export default connect(mapStateToProps)(RandomPoems);
