const initialState1 = {
    numbers: ['0','1','2','3','4','5','6','7','8','9'],
    simpleOperators: ['/','*','-','+','='],
    complexOperators: ['CE','C','<-'],
    otherOperators: ['+/-','.']
}

const storeCreator = (initialState=initialState1) => {
    const _state = {...initialState}
    const _reducers = []
    const _subscribers = []

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