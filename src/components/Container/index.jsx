import React from 'react'
import styles from './index.module.css'

function Container({children}) {
  return (
    <div role="div" className={styles.root}>{children}</div>
  )
}

export default Container