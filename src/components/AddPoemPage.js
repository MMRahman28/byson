import React from 'react';
import PoemForm from './PoemForm';
import {connect } from 'react-redux';
import { startAddPoem } from '../actions/poems';


export class AddPoemPage extends React.Component {
  onSubmit = (poem) => {
    this.props.startAddPoem(poem);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
          <h1>Add Poem</h1>
          <PoemForm
           onSubmit={this.onSubmit}
          />
      </div>
    );
  }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//          onSubmit={(expense) => {
//             //props.dispatch(addExpense(expense));
//             props.onSubmit(expense);
//             props.history.push('/');
//          }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => ({
  startAddPoem: (poem) => dispatch(startAddPoem(poem))
});

export default connect(null, mapDispatchToProps)(AddPoemPage);
