import moment from 'moment';

// FILTERS REDUCER
const fitersReducerDefaultValues = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = fitersReducerDefaultValues, action) =>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {...state, text: action.text };

        case "SORT_DATE_FILTER":
            return {...state, sortBy: 'date' };

        case "SORT_AMOUNT_FILTER":
            return {...state, sortBy: 'amount' };

        case "START_DATE":
            return {...state, startDate: action.start };

        case "END_DATE":
            return {...state, endDate: action.end };
            
        default:
            return state;
    }
}