export const setTextFilter = (note = '') => (
    {
        type: 'SET_TEXT_FILTER',
        note
    }
);

// SET_START_DATE
export const setStartDate = (startDate = undefined) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
);

// SET_END_DATE
export const setEndDate = (endDate = undefined) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
);

// SORT_BY_DATE
export const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'

    }
);
