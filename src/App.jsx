import React from 'react'
import styles from './App.module.css'
import Scoreboard from './components/scoreboard/Scoreaboard'
import Panel from './components/panel/Panel'


function App(props) {
  return (
    <div className={styles.wrapper}>
        <Scoreboard />
        <Panel />
    </div>
  )
}

export default App;