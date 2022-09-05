import React from 'react'
import styles from './index.module.css'

function UserCard({ username, classVariant}) {
  return (
    <div className={styles[`${classVariant}`]}>
      {username}
    </div>
  )
}

export default UserCard