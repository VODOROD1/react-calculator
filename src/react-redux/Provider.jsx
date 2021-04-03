import React from 'react'

export const Context = React.createContext()

const Provider = (props) => {

    return (
        <Context.Provider value={props.store}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider