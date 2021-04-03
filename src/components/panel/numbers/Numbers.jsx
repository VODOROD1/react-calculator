import React from 'react'
import styles from './Numbers.module.css'
import Number from './Number'
import {Context} from '../../../index'
import {writeOnScoreboardTC} from '../../../redux/reducers/scoreboard-reducer'

const Numbers = (props) => {

    const store = React.useContext(Context)

    const choiseNumber = (value) => {
        let thunk = writeOnScoreboardTC(store.getState().scoreboard.currentValue,value)
        store.dispatch(thunk)
    }

    const numbers = store.getState().numbers
    const numbersComps = []
    for(let i=numbers.length-1; i>=0; i--) {
        let comp = <Number number={numbers[i]} choiseNumber={choiseNumber}/>
        numbersComps.push(comp)
    }



    return (
        <div>
            {numbersComps}
        </div>
    )
}

export default Numbers