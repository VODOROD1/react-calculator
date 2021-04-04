import {addOperatorAC} from '../actions/calculate-actions'
import {toggleIsOperatedAC} from '../actions/scoreboard-actions'

const initialState = {
    calculate: {
        firstOperand: null,
        secondOperand: null,
        operator: null,
        result: null
    }
}

const calculateReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_FIRST_OPERAND':
            return state
        case 'ADD_SECOND_OPERAND':
            return state
        case 'ADD_OPERATOR':
            return {...state, calculate: {...state.calculate, operator: action.operator}}
        default:
            return state
    }
}

// THUNK CREATORS
export const addOperator = (operator) => {
    return (dispatch) => {
        let action1 = addOperatorAC(operator)
        dispatch(action1)
        let action2 = toggleIsOperatedAC(true)
        dispatch(action2)
    }
}


// switch (operator) {
//     case '/':

//         break;
//     case '*':

//         break;
//     case '-':

//         break;
//     case '+':

//         break;
//     case '=':

//         break;
//     default:
//         break;
// }


export default calculateReducer