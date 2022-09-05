import React, { useState, useEffect } from 'react'
import axios from 'axios'
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

  return (<>
    <div><h1>Leaderboard:</h1></div>
    {console.log('leaderboard: ', leaderboard)}
    {leaderboard && leaderboard.slice(0, 11).map(user => {
      return <>
      <h5 key={user._id}>{user.username}</h5>
      <div key={user._id}>{user.score}</div>
      </>
    })}
  </>
  )
}

export default Leaderboard;
