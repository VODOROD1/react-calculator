import {deleteAC,toggleIsOperatedAC,clearScoreboardAC,setResultAC,addOperatorInArrAC} from './scoreboard-actions'

export const initialState = {
    calculate: {
        firstOperand: null,
        secondOperand: null,
        operator: null,
        result: 0
    }
}

export const addOperandAC = () => {
    return {
        type: 'ADD_OPERAND'
    }
}

export const addOperatorAC = (operator) => {
    return {
        type: 'ADD_OPERATOR',
        operator
    }
}

export const clearAllCulcAC = () => {
    return {
        type: 'CLEAR_ALL_CALC'
    }
}

export const clearCalcAC = () => {
    return {
        type: 'CLEAR-CALC'
    }
}

export const calculateAC = () => {
    return {
        type: 'CALCULATE'
    }
}

// THUNK CREATORS
export const addOperatorTC = (operator) => {
    return (dispatch) => {
        dispatch(addOperatorAC(operator))
        dispatch(addOperatorInArrAC(operator))
        dispatch(addOperandAC())
        dispatch(deleteAC(true))
        dispatch(toggleIsOperatedAC(true))
    }
}

export const equalityTC = (operator) => {
    return (dispatch) => {
        dispatch(addOperandAC())
        dispatch(calculateAC())
        dispatch(setResultAC())
        dispatch(clearCalcAC())
        dispatch(clearScoreboardAC())
        // dispatch(addOperatorAC(operator))
    }
}

