import React from 'react'
import styles from './SimpleOperators.module.css'
import Operator from '../Operator'
import {Context} from '../../../index'

const SimpleOperators = (props) => {
    return (
        <Context.Consumer>
            {
                (store) => {
                    return store.getState().simpleOperators.map((operator) => {
                        return <Operator sign={operator} />
                    })
                }
            }
        </Context.Consumer>
    )
}

export default SimpleOperators