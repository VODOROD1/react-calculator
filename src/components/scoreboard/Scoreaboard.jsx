import React from 'react'
import styles from './Scoreaboard.module.css'
import connect from '../../react-redux/connect'

const Scoreaboard = (props) => {
    
    return (
        <div className={styles.wrapper}>
            <div contentEditable={true} className={styles.board}>
                { props.scoreboard.currentValue ? props.scoreboard.currentValue : 0 }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        scoreboard: state.scoreboard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Scoreaboard)