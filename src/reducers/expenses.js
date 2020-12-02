// EXPENSES REDUCER
const expensesReducerDefaultValues = [];

export default (state = expensesReducerDefaultValues, action) => {
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
