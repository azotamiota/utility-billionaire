import React from 'react'
import styles from './index.module.css'

function Button({text, handleClick, classVariant}) {
  return (
    <button className={classVariant} onClick={handleClick}>{text}</button>
  )
}

export default Button