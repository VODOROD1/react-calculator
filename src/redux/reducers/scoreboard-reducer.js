import {firstNullDeleteValidate} from '../../common/validate'
import {writeOnScoreboardAC,deleteAC,toggleIsOperatedAC} from '../actions/scoreboard-actions'


const initialState = {
    scoreboard: {
        currentValue: '0',
        isOperated: false,
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
                cuttedStr = '0'
            } else {
                cuttedStr = state.scoreboard.currentValue.slice(0,-1)
            }
            return {...state, scoreboard: {...state.scoreboard, currentValue: cuttedStr}}
        case 'TOGGEL_IS_OPERATED':
            return {...state, scoreboard: {...state.scoreboard, isOperated: action.flag}}
        default:
            return state
    }
}

// THUNK CREATOR
export const writeOnScoreboardTC = (currentValue,value,isOperated) => {
    return (dispatch) => {
        if(currentValue.length === 1) {
            let flag = firstNullDeleteValidate(currentValue,value) // валидация первого нуля
            if(flag) {
                    let action1 = deleteAC(false)   // удаляем первый ноль
                    dispatch(action1)
                    let action2 = writeOnScoreboardAC(value)
                    dispatch(action2)
            } else {
                    let action = writeOnScoreboardAC(value)
                    dispatch(action)
            }
        } else {
            if(isOperated) {

            }
            let action = writeOnScoreboardAC(value)
            dispatch(action)
        }
    }
}

export default scoreboardReducer