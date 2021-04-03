import React from 'react'
import styles from './Numbers.module.css'
import Number from './Number'
import {Context} from '../../../index'
import {writeOnScoreboardTC} from '../../../redux/reducers/scoreboard-reducer'
import connect from '../../../react-redux/connect'

const Numbers = (props) => {

    const store = React.useContext(Context)

    const choiseNumber = (value) => {
        let thunk = writeOnScoreboardTC(props.scoreboard.currentValue,value)
        store.dispatch(thunk)
        // props.writeNumber(thunk)
    }

    const numbers = store.getState().numbers
    // const numbers = props.numbers

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

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers,
        scoreboard: state.scoreboard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        writeNumber: (thunk) => {dispatch(thunk)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Numbers)
