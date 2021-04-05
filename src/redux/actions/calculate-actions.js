import {deleteAC,toggleIsOperatedAC,clearScoreboardAC,setResultAC} from './scoreboard-actions'

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

export const sumAC = () => {
   return {
        type: 'SUM'
   }

}

export const diffAC = () => {
    return {

    }
}

export const multiAC = () => {
    return {

    }
}

export const divideAC = () => {
    return {

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
        dispatch(addOperandAC())
        dispatch(calculateAC())
        dispatch(setResultAC())
        dispatch(clearCalcAC())
        dispatch(clearScoreboardAC())
        // dispatch(addOperatorAC(operator))
    }
}

