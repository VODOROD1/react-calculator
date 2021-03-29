import React from 'react'
import styles from './Panel.module.css'
import SimpleOperators from './simple-operators/SimpleOperators'
import ComplexOperators from './complex-operators/ComplexOperators'
import OtherOperators from './other-operators/Operator'
import Numbers from './numbers/Numbers'

const Panel = (props) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <ComplexOperators />
                <Numbers />
            </div>
            <SimpleOperators />
        </div>
    )
}

export default Panel