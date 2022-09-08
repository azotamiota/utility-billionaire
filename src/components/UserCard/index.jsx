import React from 'react'
import styles from './index.module.css'

function UserCard({ currentPlayers, classVariant}) {
  console.log('currentPlayers in UserCard: ', currentPlayers);
  return (
      currentPlayers.map(player => {
      return (
        <div role="username" key={Math.random()} className={styles.normal}>
        <span>{player.username}</span>&nbsp;<span>{player.score}</span>
        </div>
      )
      }
    )
   
    )
  
}

export default UserCard
