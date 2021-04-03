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
            return state
        default:
            return state
    }
}

export default calculateReducer