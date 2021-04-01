import React from 'react'
import styles from './ComplexOperators.module.css'
import {Context} from '../../../index'
import Operator from '../Operator'
import {deleteAC} from '../../../redux/actions/scoreboard-actions'

const ComplexOperators = (props) => {
    console.log('ComplexOperators')
    const store = React.useContext(Context)

    const operatorHandler = (sign) => {
        switch(sign) {
            case 'CE':
                break;
            case 'C':
                let currentStr = store.getState().scoreboard.currentValue
                for(let i=0; i<currentStr.length-1; i++) {
                    let action = deleteAC()
                    store.dispatch(action)
                }
                break;
            case '<-':
                let action = deleteAC()
                store.dispatch(action)
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        const LocalContext = Context
        console.log('Scoreaboard')

        const consumer = LocalContext.Consumer
        
    },[])

    return (
        <div className={styles.wrapper}>
            {
                store.getState().complexOperators.map((operator) => {
                    return <Operator sign={operator} operatorHandler={operatorHandler}/>
                })
            }
        </div>
    )   
}

export default ComplexOperators