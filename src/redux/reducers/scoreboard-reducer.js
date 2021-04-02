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
            let cuttedStr = ''
            if(action.all) {
                cuttedStr = ''
            } else {
                cuttedStr = state.scoreboard.currentValue.slice(0,-1)
            }
            return {...state, scoreboard: {...state.scoreboard, currentValue: cuttedStr}}
        default:
            return state
    }
}

export default scoreboardReducer