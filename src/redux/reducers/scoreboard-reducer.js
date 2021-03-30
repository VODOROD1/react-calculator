const initialState = {
    scoreboard: {
        currentValue: '',
        result: null,
    }
}

const scoreboardReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'WRITE_ON_SCOREBOARD':
            return {...state, scoreboard: {...state.scoreboard,currentValue: String(state.scoreboard.currentValue) + action.value}}
        case 'DELETE_FROM_SCOREBOARD':
            return state
        default:
            return state
    }
}

export default scoreboardReducer