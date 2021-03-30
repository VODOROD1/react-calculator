const initialState = {
    calculate: {
        operand: null,
        operator: null,
        result: null
    }
}

const calculateReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default calculateReducer