import React from 'react'
import styles from './Panel.module.css'
import SimpleOperators from './simple-operators/SimpleOperators'
import ComplexOperators from './complex-operators/ComplexOperators'
// import OtherOperators from './other-operators/Operator'
import Numbers from './numbers/Numbers'

const Panel = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.numbers}>
                <ComplexOperators />
                <Numbers />
            </div>
            <div className={styles.simpleOperators}>
                <SimpleOperators />
            </div>
        </div>
    )
}

export default Panel