import React from 'react'
import styles from './Number.module.css'

const Number = (props) => {

    const clickHandler = (e) => {
        e.preventDefault()
        props.choiseNumber(props.number.value)
    }

    return (
        <div className={styles.numberButton} onClick={clickHandler} >
            {props.number.sign}
        </div>
    )
}

export default Number