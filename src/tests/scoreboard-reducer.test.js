import {scoreboardReducer,writeOnScoreboardAC,addOperatorInArrAC} from '../redux/actions/scoreboard-actions'

const state = {
    scoreboard: {
        currentValue: '1',
        operators: ['*'],
        isOperated: false,
    }
}

test('Konkatinate values in scoreboard', () => {
    let action = writeOnScoreboardAC('2')
    let newState = scoreboardReducer(state,action)
    expect(newState.scoreboard.currentValue).toBe('12')
})

test('Length of operators-array should be increase',() => {
    let action = addOperatorInArrAC('/')
    let newState = scoreboardReducer(state,action)
    expect(newState.scoreboard.operators.length).toBe(2)
})