import React from 'react'
import styles from './ComplexOperators.module.css'
import Operator from '../Operator'
import {deleteAC} from '../../../redux/actions/scoreboard-actions'
import {clearAllCulcAC} from '../../../redux/actions/calculate-actions'
import connect from '../../../react-redux/connect'

const ComplexOperators = (props) => {
    console.log('ComplexOperators')

    const operatorHandler = (sign) => {
        switch(sign) {
            case 'CE': {

                break;
            }
            case 'C': {
                let action1 = deleteAC(true)
                props.deleteNumber(action1)
                let action2 = clearAllCulcAC()
                props.deleteCulc(action2)
                break;
            }
            case '<-': {
                let action = deleteAC(false)
                props.deleteNumber(action)
                break;
            }
            default:
                break;
        }
    }

    // React.useEffect(() => {
    //     console.log('Scoreaboard')
    // },[])

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
        deleteNumber: (action) => {dispatch(action)},
        deleteCulc: (action) => {dispatch(action)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComplexOperators)