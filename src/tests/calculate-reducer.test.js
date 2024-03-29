import {calculateReducer} from '../redux/reducers/calculate-reducer'
import {calculateAC} from '../redux/actions/calculate-actions'

let state = {
    calculate: {
        firstOperand: 1,
        secondOperand: 2,
        operator: '+',
        result: 0
    }
}

test('CALCULATE', () => {
    let action = calculateAC()
    let newState = calculateReducer(state,action)
    expect(newState.calculate.result).toBe(3)
})