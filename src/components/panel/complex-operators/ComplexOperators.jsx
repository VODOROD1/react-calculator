import React from 'react'
import styles from './ComplexOperators.module.css'
import {Context} from '../../../index'
import Operator from '../Operator'

const ComplexOperators = (props) => {
    console.log('ComplexOperators')
    const store = React.useContext(Context)

    React.useEffect(() => {
        const LocalContext = Context
        console.log('Scoreaboard')

        const consumer = LocalContext.Consumer
        
    },[])

    return (
        <div className={styles.wrapper}>
            {
                store.complexOperators.map((operator) => {
                    return <Operator mean={operator}/>
                })
            }
        </div>
    )   
}

export default ComplexOperators