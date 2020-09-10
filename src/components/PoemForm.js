import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class PoemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       note: props.poem ? props.poem.note : '',
       createdAt: props.poem ? moment(props.poem.createdAt) : moment(),
       calendarFocused: false,
       error: ''
    };
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ( {note} ));
  };

  onDateChange = (createdAt) => {
     if(createdAt) {
       this.setState(() => ({ createdAt }));
     }

  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused}));

  };


  onSubmit = (e) => {
    e.preventDefault();

  if (!this.state.note) {
    // Set error state equal to 'Please provide description and amount'

    this.setState(() => ( {error: 'Please provide description and amount'} ));
  } else {
    // clear the error
    this.setState(() => ({error: ''}));
    this.props.onSubmit({
      note: this.state.note,
      createdAt: this.state.createdAt.valueOf(),
    });

  }

};

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
         <form onSubmit={this.onSubmit}>

            <textarea
                placeholder="Text goes here"
                value={this.state.note}
                onChange={this.onNoteChange}
               >
              </textarea>

              <button>Add Poem</button>

              <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
               displayFormat={() => "DD/MM/YYYY"}
              />
          </form>
      </div>
    )
  }
}
