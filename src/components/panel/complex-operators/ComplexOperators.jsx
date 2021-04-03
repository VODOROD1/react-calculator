import React from 'react'
import styles from './ComplexOperators.module.css'
import {Context} from '../../../index'
import Operator from '../Operator'
import {deleteAC} from '../../../redux/actions/scoreboard-actions'
import connect from '../../../react-redux/connect'

const ComplexOperators = (props) => {
    console.log('ComplexOperators')
    const store = React.useContext(Context)

    const operatorHandler = (sign) => {
        switch(sign) {
            case 'CE': {

                break;
            }
            case 'C': {
                let action = deleteAC(true)
                props.deleteNumber(action)
                // store.dispatch(action)
                break;
            }
            case '<-': {
                let action = deleteAC(false)
                props.deleteNumber(action)
                // store.dispatch(action)
                break;
            }
            default:
                break;
        }
    }

    React.useEffect(() => {
        const LocalContext = Context
        console.log('Scoreaboard')

        const consumer = LocalContext.Consumer
        
    },[])

    return (
        <div className={styles.wrapper}>
            {
                props.complexOperators.map((operator) => {
                    return <Operator sign={operator} operatorHandler={operatorHandler}/>
                })
            }
        </div>
    )   
}

const mapStateToProps = (state) => {
    return {
        complexOperators: state.complexOperators
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNumber: (thunk) => {dispatch(thunk)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplexOperators)