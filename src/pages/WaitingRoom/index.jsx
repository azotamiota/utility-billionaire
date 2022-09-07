import React, {useContext, useEffect, useState } from 'react'
import styles from './index.module.css'

import { Button, Container, UserCard } from "../../components"
import { SocketContext, useQuestions } from '../../context';
import { useNavigate } from 'react-router-dom';

function WaitingRoom() {
  const { data, setData } = useQuestions()
  const [players, setPlayers] = useState([]) // needs to come with the current username
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
    setPlayers(arr)
  })
  socket.on('begin', () => {
    navigateTo('/game')
  })

  const startGame = () => {
    console.log("this should start the game!")
    socket.emit('start_game', '/game')
  }
  useEffect(() => {
    console.log(players)
  }, [players])

  return (
    <div>
      <h1>Room name</h1> {/*should display actual room name!*/}
      {players.length === 4 ? <h2>You're lobby is ready to play!</h2> : <h2>Waiting for more players...</h2>}
      <Container>
        {players.map((p, i) => <UserCard key={i} username={p} classVariant='normal'/>)}
        <Button text="Start" handleClick={startGame} classVariant="neonText"/>
      </Container>
    </div>
  )
}

export default WaitingRoom
