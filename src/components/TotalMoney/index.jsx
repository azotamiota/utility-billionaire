import React from 'react'
import styles from './index.module.css'

function TotalMoney({children}) {
  return (
    <div role="score">{children}</div>
  )
}

export default TotalMoney