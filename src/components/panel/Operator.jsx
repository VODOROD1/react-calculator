import React from 'react'
import styles from './Operator.module.css'

const Operator = (props) => {
    return (
        <div className={styles.operator}>
            {props.mean}
        </div>
    )
}

export default Operator