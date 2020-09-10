import React from 'react';
import { connect } from 'react-redux';
import PoemForm from './PoemForm';
import { editPoem, removePoem } from '../actions/poems';

// Refactor EditExpensePage to be a class based Component
// Setup mapDispatchToProps editExpense and removeExpense




export class EditPoemPage extends React.Component {
  onSubmit = (poem) => {
    // Dispatch the action to edit the expense
    // Redirect to the dashboard
    this.props.editPoem(this.props.poem.id, poem);
    this.props.history.push('/');
  };


  onRemove = () => {
    this.props.removePoem({id: this.props.poem.id});
    this.props.history.push('/');
  };
  render(){
    return (
        <div>
            <PoemForm
             poem={this.props.poem}
             onSubmit={this.onSubmit}
             />
             <button onClick={this.onRemove}>Remove</button>
        </div>

    );
  }
};
const mapStateToProps = (state, props) => ({
  poem: state.poems.find((poem) => poem.id === props.match.params.id)
  //dynamic part of the url (id) will be used as id or vice versa
});

const mapDispatchToProps = (dispatch, props) => ({
  editPoem: (id, poem) => dispatch(editPoem(id, poem)),
  removePoem: (data) => dispatch(removePoem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPoemPage);
