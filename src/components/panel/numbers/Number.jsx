import React from 'react'
import styles from './Number.module.css'

const Number = (props) => {
    return (
        <div className={styles.numberButton}>
            {props.number.sign}
        </div>
    )
}

export default Number