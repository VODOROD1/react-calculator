import React from 'react'
import styles from './Numbers.module.css'
import Number from './Number'
import {Context} from '../../../index'

const Numbers = (props) => {

    const numbers = React.useContext(Context).numbers
    const numbersComps = []
    for(let i=numbers.length-1; i>=0; i--) {
        let comp = <Number number={numbers[i]}/>
        numbersComps.push(comp)
    }

    return (
        <div>
            {numbersComps}
        </div>
    )
}

export default Numbers