import React from 'react'
import styles from './App.module.scss'
import {Cars, Sidebar} from './components'

function App() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Cars/>
    </div>
  );
}

export default App;
