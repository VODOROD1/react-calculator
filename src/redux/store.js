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
    let _state = {...initialState}
    const _reducers = reducers
    const _subscribers = []

    reducers.forEach((reducer) => {
        let stateOfReducer = reducer(undefined,{type: 'INITIALIZATION'})
        let nameOfDirectory = Object.keys(stateOfReducer)[0]    // получаем имя поля объекта возвращаемого из редьюсера
        _state = {..._state, [nameOfDirectory]: {...stateOfReducer[nameOfDirectory]}}
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
            _reducers.forEach((reducer) => {
                _state = reducer(_state,action)
            })
            _subscribers.forEach((subscriber) => {
                subscriber()
            })
        }
    }
}

export default storeCreator