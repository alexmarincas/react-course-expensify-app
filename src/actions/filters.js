// EDIT TEXT FILTER
export const setTextFilter = (text='') =>({
    type: "SET_TEXT_FILTER",
    text
});

// SORT BY AMOUNT FILTER
export const sortByAmount = () =>({
    type: "SORT_AMOUNT_FILTER"
});

// SORT BY DATE FILTER
export const sortByDate = () =>({
    type: "SORT_DATE_FILTER"
});

// SET START DATE
export const setStartDate = (start=undefined) =>({
    type: "START_DATE",
    start
});

// SET END DATE
export const setEndDate = (end=undefined) =>({
    type: "END_DATE",
    end
});