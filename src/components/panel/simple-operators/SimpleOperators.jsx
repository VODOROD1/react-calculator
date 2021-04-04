import React from 'react'
import styles from './SimpleOperators.module.css'
import Operator from '../Operator'
import {Context} from '../../../index'
import connect from '../../../react-redux/connect'

const SimpleOperators = (props) => {
    return (
        <div>
            {
                props.simpleOperators.map((operator) => {
                    return <Operator sign={operator} />
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
        addOperator: (action) => {dispatch(action)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleOperators)