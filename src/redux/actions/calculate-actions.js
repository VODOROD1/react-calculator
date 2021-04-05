
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

export const clearCalcAC = () => {
    return {
        type: 'CLEAR'
    }
}