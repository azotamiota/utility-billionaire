import React from 'react'
import styles from './index.module.css'

function Title({classVariant, children}) {
  return (
    <div className={styles[`${classVariant}`]}>{children}</div>
  )
}

export default Title