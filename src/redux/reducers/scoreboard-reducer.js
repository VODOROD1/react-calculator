import {initialState} from '../actions/scoreboard-actions'

export const scoreboardReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'WRITE_ON_SCOREBOARD':
            return {...state, scoreboard: {...state.scoreboard,currentValue: String(state.scoreboard.currentValue) + action.value}}
        case 'DELETE_FROM_SCOREBOARD':
            let cuttedStr = ''
            if(action.all) {
                cuttedStr = '0'
            } else {
                cuttedStr = state.scoreboard.currentValue.slice(0,-1)
            }
            return {...state, scoreboard: {...state.scoreboard, currentValue: cuttedStr}}
        case 'TOGGEL_IS_OPERATED':
            return {...state, scoreboard: {...state.scoreboard, isOperated: action.flag}}
        case 'CLEAR_SCOREBOARD': {
            // Обнуляем этот стэйт
            return {...state, scoreboard: {...state.scoreboard, isOperated: false}}
        }
        case 'SET_RESULT': {
            return {...state, scoreboard: {...state.scoreboard, currentValue: state.calculate.result}}
        }
        case 'ADD_OPERATOR_IN_ARR': {
            return {...state, scoreboard: {...state.scoreboard, operators: [...state.scoreboard.operators, action.operator]}}
        }
        case 'DELETE_OPERATORS': {
            return {...state, scoreboard: {...state.scoreboard, operators: []}}
        }
        default:
            return state
    }
}

export default scoreboardReducer