import {firstNullDeleteValidate} from '../../common/validate'

export const initialState = {
    scoreboard: {
        currentValue: '0',
        isOperated: false,
    }
}

export const writeOnScoreboardAC = (value) => {
    return {
        type: 'WRITE_ON_SCOREBOARD',
        value
    }
}

export const deleteAC = (flag) => {
    return {
        type: 'DELETE_FROM_SCOREBOARD',
        all: flag
    }
}

export const toggleIsOperatedAC = (flag) => {
    return {
        type: 'TOGGEL_IS_OPERATED',
        flag
    }
}

export const clearScoreboardAC = () => {
    return {
        type: 'CLEAR_SCOREBOARD'
    }
}

export const setResultAC = () => {
    return {
        type: 'SET_RESULT'
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
                let action1 = deleteAC(true)   // удаляем все
                // dispatch(action1)
                let action2 = writeOnScoreboardAC(value)
                dispatch(action2)
            } else {
                let action = writeOnScoreboardAC(value)
                dispatch(action)
            }
        }
    }
}