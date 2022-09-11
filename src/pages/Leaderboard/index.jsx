import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {Container, UserCard, Title} from '../../components'
import styles from './index.module.css'

function Leaderboard() {

  const [leaderboard, setLeaderboard] = useState(null)

  const fetchUsers = async () => {
    const fetchedUsers = await axios.get('https://utility-billionaire.herokuapp.com/leaderboard')
    const sortedUsers = fetchedUsers.data.users.sort((a, b) => b.score - a.score)
    setLeaderboard(sortedUsers)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
  <div className={styles.leaderboarddiv}>
    <Container>
      <Title>Leaderboard:</Title>
      {leaderboard && <UserCard currentPlayers={leaderboard.slice(0, 11)}/>}
    </Container>
  </div>
  )
}

export default Leaderboard;
