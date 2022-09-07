import React, {useContext, useEffect, useState } from 'react'
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
      console.log(player)
    }
    console.log(incoming.questions[0].questions)
    setData(incoming.questions[0].questions)
    console.log(data)
    setCurrentPlayers(arr)
  })
  socket.on('begin', () => {
    navigateTo('/game')
  })

  const startGame = () => {
    console.log("this should start the game!")
    socket.emit('start_game')
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
