import React, {useContext, useEffect } from 'react'
import styles from './index.module.css'

import { Button, Container, UserCard, Title } from "../../components"
import { SocketContext, useQuestions, useRoom } from '../../context';
import { useNavigate } from 'react-router-dom';

function WaitingRoom() {
  const { data, setData } = useQuestions()

 const { players, room } = useRoom();
 const [currentPlayers, setCurrentPlayers] = players
 
 
 const socket = useContext(SocketContext);
  const navigateTo = useNavigate()

  socket.on('joined', (incoming) => {
    const arr = []
    for (let player of incoming.players) {
      arr.push(player.username)
    }
    setData(incoming.questions[0].questions)
    setCurrentPlayers(arr)
  })
  socket.on('begin', () => {
    navigateTo('/game')
  })

  const startGame = () => {
    socket.emit('start_game', room[0])
  }
  useEffect(() => {
    console.log(currentPlayers)
  }, [currentPlayers])

  return (
    <div className={styles.waitingdiv}>
      <Title>{room}</Title> {/*should display actual room name!*/}
      {currentPlayers && currentPlayers.length > 0 ? <h2>Ready to play!</h2> : <h2>Waiting for more players...</h2>}
      <Container>
        <UserCard currentPlayers={currentPlayers.map(player => {
          return {username: player}
        })} />
        <Button text="Start" handleClick={startGame} classVariant="neonText"/>
      </Container>
    </div>
  )
}

export default WaitingRoom
