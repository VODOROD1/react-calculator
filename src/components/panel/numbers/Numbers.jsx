import React from 'react'
import styles from './Numbers.module.css'
import Number from './Number'
import {Context} from '../../../index'
import {writeOnScoreboardAC} from '../../../redux/actions/scoreboard-actions'

const Numbers = (props) => {

    const store = React.useContext(Context)

    const choiseNumber = (value) => {
        let action = writeOnScoreboardAC(value)
        store.dispatch(action)
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