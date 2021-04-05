import {addOperatorAC,addOperandAC,clearCalcAC} from '../actions/calculate-actions'
import {toggleIsOperatedAC,clearScoreboardAC,setResultAC,deleteAC} from '../actions/scoreboard-actions'
import {convertStrToNumber} from '../../common/validate'

const initialState = {
    calculate: {
        firstOperand: null,
        secondOperand: null,
        operator: null,
        result: 0
    }
}

const calculate = (operator,operand1,operand2) => {
    switch(operator) {
        case '/':
            let divide = Number(operand1) / Number(operand2)
            return divide;
        case '*':
            let difference = Number(operand1) * Number(operand2)
            return difference;
        case '-':
            let multiple = Number(operand1) - Number(operand2)
            return multiple;
        case '+':
            let sum = Number(operand1) + Number(operand2)
            return sum;
        case '=':
            return false
        default:
            return undefined
    }
}

const calculateReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_OPERAND': {
            if(state.calculate.firstOperand) {
                return {...state, calculate: {...state.calculate, secondOperand: state.scoreboard.currentValue}}
            } else {
                return {...state, calculate: {...state.calculate, firstOperand: state.scoreboard.currentValue}}
            }
        }
        case 'ADD_OPERATOR': {
            if(!state.calculate.operator) {
                return {...state, calculate: {...state.calculate, operator: action.operator}}
            }
        }
        case 'CALCULATE': {
            let result = ''
            if(state.calculate.result) {
                result = calculate(state.calculate.operator,state.calculate.result,state.calculate.operand2)
            } else {
                result = calculate(state.calculate.operator,state.calculate.operand1,state.calculate.operand2)
            }
            return {...state,calculate: {...state.calculate, operator: action.operator, result: result}}
        }
        case 'CLEAR': {
            // Обнуляем этот стэйт
            return {...state, calculate: {...state.calculate, firstOperand: null, secondOperand: null, operator: null,  result: 0}}
        }
        default:
            return state
    }
}

// THUNK CREATORS
export const addOperatorTC = (operator) => {
    return (dispatch) => {
        let action1 = addOperatorAC(operator)
        dispatch(action1)
        let action2 = addOperandAC()
        dispatch(action2)
        let action3 = deleteAC(true)
        dispatch(action3)
        let action4 = toggleIsOperatedAC(true)
        dispatch(action4)
    }
}

export const equalityTC = (operator) => {
    return (dispatch) => {
        dispatch(clearCalcAC())
        dispatch(clearScoreboardAC())
        dispatch(setResultAC())
        dispatch(addOperatorAC(operator))
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