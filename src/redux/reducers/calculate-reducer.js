import {convertStrToNumber} from '../../common/validate'
import {initialState} from '../actions/calculate-actions'


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
                result = calculate(state.calculate.operator,state.calculate.result,state.calculate.secondOperand)
            } else {
                result = calculate(state.calculate.operator,state.calculate.firstOperand,state.calculate.secondOperand)
            }
            return {...state,calculate: {...state.calculate, operator: action.operator, result: result}}
        }
        case 'CLEAR_CALC': {
            // Обнуляем этот стэйт
            return {...state, calculate: {...state.calculate, firstOperand: null, secondOperand: null, operator: null}}
        }
        case 'CLEAR_ALL_CALC': {
            return {...state, calculate: {...state.calculate, firstOperand: null, secondOperand: null, operator: null, result: 0}}
        }
        default:
            return state
    }
}



export default calculateReducer