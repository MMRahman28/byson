import moment from 'moment';

// expenses: state.expenses
// {text, sortBy, startDate, endate} : state.filters
export default (poems, { note, sortBy, startDate, endDate}) => {
    return poems.filter((poem) => {
         const createdAtMoment = moment(poem.createdAt);
         const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;


        // figure out if expenses.description has the text variable string inside of it
        // includes
        // convert both strings to lowercase
        const textMatch = typeof note !== 'string' || poem.note.toLowerCase().includes(note.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
    //   // sortBy -> date
    //   // put the ones with the latest date first
    if(sortBy === 'date') {
             return a.createdAt < b.createdAt ? 1 : -1;
           }
        });
    //     // sortBy -> amount
    //     // put the ones with a greater amount first
    //     else if(sortBy === 'amount') {
    //         return a.amount < b.amount ? 1 : -1;
    //     }
    // });

};
