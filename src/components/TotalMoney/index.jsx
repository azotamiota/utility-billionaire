import React from 'react'
import styles from './index.module.css'

function TotalMoney({children, divName}) {
  return (
    <div role="score" className={styles[`${divName}`]}>{children}</div>
  )
}

export default TotalMoney