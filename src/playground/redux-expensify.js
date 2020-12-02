import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {})  =>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

// EDIT EXPENSE
const editExpense = (id, updates) =>({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// REMOVE EXPENSE
const removeExpense = ({id} = {})  =>({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT TEXT FILTER
const setTextFilter = (text='') =>({
    type: "SET_TEXT_FILTER",
    text
});

// SORT BY AMOUNT FILTER
const sortByAmount = () =>({
    type: "SORT_AMOUNT_FILTER"
});

// SORT BY DATE FILTER
const sortByDate = () =>({
    type: "SORT_DATE_FILTER"
});

// SET START DATE
const setStartDate = (start=undefined) =>({
    type: "START_DATE",
    start
});

// SET END DATE
const setEndDate = (end=undefined) =>({
    type: "END_DATE",
    end
});

// EXPENSES REDUCER
const expensesReducerDefaultValues = [];

const expensesReducer = (state = expensesReducerDefaultValues, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
              return expense.id===action.id ? {...expense, ...action.updates } : expense;
            });
        case 'REMOVE_EXPENSE':
            return state.filter( ({id})=> id !== action.id);
        default:
            return state;
    }
}

// FILTERS REDUCER
const fitersReducerDefaultValues = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = fitersReducerDefaultValues, action) =>{
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

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( expense => {
        const startDateMatch = typeof startDate!=='number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <=endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy==="date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy==="amount"){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// STORE CREATION
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe( () => {    
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log( visibleExpenses );
});

const expense2 = store.dispatch(addExpense({description : 'rent', amount: 500, createdAt: -4410}));
const expense1 = store.dispatch(addExpense({description : 'Rent', amount: 4100, createdAt: 4410}));

// store.dispatch(removeExpense({ id : expense2.expense.id }));
// store.dispatch(editExpense(expense1.expense.id, { amount: 500 } ));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'ddvvxdvx',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0    
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
