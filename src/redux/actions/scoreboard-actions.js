

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

