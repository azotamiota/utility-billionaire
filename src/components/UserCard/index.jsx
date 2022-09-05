import React from 'react'
import styles from './index.module.css'

function UserCard({ username, score, classVariant}) {
  return (
    <div role="username" className={styles[`${classVariant}`]}>
      <span>{username}</span>&nbsp;<span>{score}</span>
    </div>
  )
}

export default UserCard