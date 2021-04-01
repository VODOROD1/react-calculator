import React from 'react'
import styles from './Operator.module.css'

const Operator = (props) => {
    return (
        <div className={styles.operator} onClick={() => props.operatorHandler(props.sign)}>
            {props.sign}
        </div>
    )
}

export default Operator