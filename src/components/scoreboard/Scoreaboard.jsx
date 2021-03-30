import React from 'react'
import styles from './Scoreaboard.module.css'
import {Context} from '../../index'

const Scoreaboard = (props) => {

    React.useEffect(() => {
        const LocalContext = Context
        console.log('Scoreaboard')
        const consumer = LocalContext.Consumer  
    },[])
    
    return (

        <Context.Consumer>
            {(store) => {
                return (
                    <div className={styles.wrapper}>
                        <div contentEditable={true} className={styles.board}>
                            { store.getState().scoreboard.currentValue ? store.getState().scoreboard.currentValue : 0 }
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Scoreaboard