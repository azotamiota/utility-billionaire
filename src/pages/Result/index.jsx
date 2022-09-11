import React, { useEffect, useContext, useState } from 'react'
import Confetti from 'react-confetti'
import axios from 'axios'

import { Container, Title, UserCard } from '../../components';
import { SocketContext, useRoom } from '../../context'

import styles from './index.module.css'

function Result() {

  const socket = useContext(SocketContext);
  const { room, currentUser } = useRoom();
  const [username, ] = currentUser
  const [currentRoom, ] = room
  const [players, setPlayers] = useState([])

  function sortByKey(array, key) {
    return players.sort(function(a, b) {
        const x = a[key]; const y = b[key];
        return ((x > y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  socket.on('final_scores', data => {
    setPlayers(data)
  })


  useEffect(() => {
    const url = 'https://utility-billionaire.herokuapp.com/results'
    console.log('players before sending to database:', players)
    players.map(player => {
      axios.post(url, {
          username: player.username,
          score: player.score
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
  }, [players])
  
  useEffect(() => {
    socket.emit('page_loaded', currentRoom)
    socket.emit('finish_game', {username, room:currentRoom})
  }, [])


  return (
    <div className={styles.resultdiv}>
      <Container>
        <Confetti/>
        <Title>Results</Title>
        <UserCard currentPlayers={sortByKey(players, 'score')} />
      </Container>
    </div>
  )
}

export default Result
