
export const writeOnScoreboardAC = (value) => {
    return {
        type: 'WRITE_ON_SCOREBOARD',
        value
    }
}

export const deleteAC = () => {
    return {
        type: 'DELETE_FROM_SCOREBOARD'
    }
}

