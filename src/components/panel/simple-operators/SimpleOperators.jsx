import React from 'react'
import styles from './SimpleOperators.module.css'
import Operator from '../Operator'
import connect from '../../../react-redux/connect'
import {addOperatorTC,equalityTC} from '../../../redux/actions/calculate-actions'
import {addOperatorAC,deleteOperatorsAC} from '../../../redux/actions/scoreboard-actions'

const SimpleOperators = (props) => {

    const addOperator = (operator) => {
        if(operator === '=') {
            let thunk = equalityTC(operator)
            props.calculate(thunk)
        } else {
            const thunk = addOperatorTC(operator)
            props.addOperator(thunk)
        }
    }

    return (
        <div>
            {
                props.simpleOperators.map((operator) => {
                    return <Operator sign={operator} operatorHandler={addOperator} />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        simpleOperators: state.simpleOperators
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOperator: (action) => {dispatch(action)},
        calculate: (action) => {dispatch(action)},
        addOperator: (action) => {dispatch(action)},
        deleteOperators: (action) => {dispatch(action)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleOperators)