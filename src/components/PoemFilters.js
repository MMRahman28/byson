import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/filters';


export class PoemFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

 onTextChange = (e) => {
   this.props.setTextFilter(e.target.value);
 };
 onSortChange =(e) => {
   if (e.target.value === 'date') {
     this.props.sortByDate();
   }

 };


  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.note}
          onChange={this.onTextChange}/>
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
          <option value="date">Date</option>
          //<option value="Text">Text</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="SDP"
            endDate={this.props.filters.endDate}
            endDateId="EDP"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={() => "DD/MM/YYYY"}
          />

        </div>
    );
  }
};

const mapStateToProps = (state) => ({
    filters: state.filters
  });

const mapDispatchToProps = (dispatch) => ({
   setTextFilter: (note) => dispatch(setTextFilter(note)),
   sortByDate: () => dispatch(sortByDate()),
   setStartDate: (startDate) => dispatch(setStartDate(startDate)),
   setEndDate: (endDate) => dispatch(setEndDate(endDate))
   });

export default connect(mapStateToProps, mapDispatchToProps)(PoemFilters);
