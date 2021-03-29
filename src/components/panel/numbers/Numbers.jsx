import React from 'react'
import styles from './Numbers.module.css'
import Number from './Number'
import {Context} from '../../../index'

const Numbers = (props) => {
    return (
        <div>
            12345
        </div>
    )
        // <Context.Consumer>
        //     {
        //         (store) => {
        //             <div className={styles.wrapper}>
        //                 {store.numbers.map((number) => {
        //                     return <Number number={number}/>
        //                 })}
        //             </div>
        //         }
        //     }
        // </Context.Consumer>
    
}

export default Numbers