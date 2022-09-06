import React from 'react'
import styles from './index.module.css'

function Input({type, defaultValue, name, classVariant, children}) {
  return (
    type=='select' ? 
    <>
    <label htmlFor={name}>{children}</label>
    <select name={name} className={styles[`${classVariant}`]} id={name}>
      {defaultValue.map(o => <option key={o.id} defaultValue={o.value}>{o.name}</option>)}
    </select>
    </>
     :
     <>
      <label htmlFor={name}>{children}</label>
      <input role="input" className={styles[`${classVariant}`]} type={type} name={name} defaultValue={defaultValue} id={name}/>
     </>

  )
}

export default Input