const initialState1 = {
    numbers:
    [
        {sign:'.', value:'.'},
        {sign:'0', value:0},
        {sign:'+/-', value:'+/-'},
        {sign:'3', value:3},
        {sign:'2', value:2},
        {sign:'1', value:1},
        {sign:'6', value:6},
        {sign:'5', value:5},
        {sign:'4', value:4},
        {sign:'9', value:9},
        {sign:'8', value:8},
        {sign:'7', value:7},
    ],
    simpleOperators: ['/','*','-','+','='],
    complexOperators: ['CE','C','<-'],
    otherOperators: ['+/-','.'],
}

const storeCreator = (initialState=initialState1,reducers) => {
    const _state = {...initialState}
    const _reducers = reducers
    const _subscribers = []

    reducers.forEach((reducer) => {
        let reducerState = reducer(undefined,{type: 'INITIALIZATION'})
        Object.assign(_state,reducerState)
        // _state = {..._state,...reducerState}
    })

    return {
        getState() {
            return _state
        },
        subscribe(subscriber) {
            _subscribers.push(subscriber)
        },
        dispatch(action) {

        }
    }
}

export default storeCreator