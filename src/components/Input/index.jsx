import React from 'react'
import styles from './index.module.css'

function Input({type, defaultValue, name, classVariant}) {
  return (
    type=='select' ? 
    <select name={name} className={styles[`${classVariant}`]}>
      {defaultValue.map(o => <option key={o.id} value={o.name}>{o.name}</option>)}
    </select> :
    <input className={styles[`${classVariant}`]} type={type} name={name} value={defaultValue} />
  )
}

export default Input