import React from 'react'
import styles from './index.module.css'

function Input({type, defaultValue, name}) {
  return (
    type=='select' ? 
    <select name={name}>
      {defaultValue.map(o => <option key={o.id} value={o.name}>{o.name}</option>)}
    </select> :
    <input type={type} name={name} value={defaultValue} />
  )
}

export default Input