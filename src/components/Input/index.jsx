import React from 'react'
import styles from './index.module.css'

function Input({type, defaultValue, name, classVariant, children, onChange=()=>{}}) {
  return (
    type=='select' ? 
    <>
    <label htmlFor={name}>{children}</label>
    <select name={name} className={styles[`${classVariant}`]} id={name} onChange={onChange}>
      {defaultValue.map(o => <option role='option' key={o.id} value={o.value}>{o.name}</option>)}
    </select>
    </>
     :
     <>
      <label htmlFor={name}>{children}</label>
      <input role="input" className={styles[`${classVariant}`]} onChange={onChange} type={type} name={name} defaultValue={defaultValue} id={name}/>
     </>

  )
}

export default Input
