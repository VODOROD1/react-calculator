import React from 'react'
import {Context} from './Provider'

const connect = (mapStateToProps, mapDispatchToProps) => {

    return (WrappedComp) => {

        return (props) => {

            const store = React.useContext(Context) // получаем данные из контекста

            const stateToProps = mapStateToProps(store.getState())
            const dispatchToProps = mapDispatchToProps(store.dispatch.bind(store))

            return (
                <WrappedComp {...stateToProps} {...dispatchToProps}/>
            )
        }
    }
}

export default connect