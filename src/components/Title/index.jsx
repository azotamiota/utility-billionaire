import React from 'react'
import styles from './index.module.css'

function Title({classVariant='neonText', children}) {
  return (
    <h1 role="title" className={styles[`${classVariant}`]}>{children}</h1>
  )
}

export default Title