
const writeOnScoreboardAC = (value) => {
    return {
        type: 'WRITE_ON_SCOREBOARD',
        value
    }
}

const deleteAC = () => {
    return {
        type: 'DELETE_FROM_SCOREBOARD'
    }
}

