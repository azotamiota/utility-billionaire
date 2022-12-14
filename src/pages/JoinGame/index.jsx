import React, {useContext} from 'react'
import { Button, Container, Input, Title } from '../../components';
import { SocketContext, useRoom } from '../../context'
import { useNavigate } from 'react-router-dom';

import styles from './index.module.css'

function JoinGame() {
  const socket = useContext(SocketContext);
  const navigateTo = useNavigate()

  const { room, currentUser } = useRoom();
  const [currentRoom, setCurrentRoom] = room
  const [username, setUsername] = currentUser

  const joinGame = () => {
    socket.emit('join_room', {username, room: currentRoom})
    console.log("this should join an existing game!")
    navigateTo('/waiting')
  }

  return (
    <div className={styles.joindiv}>
      <Title>Join a game!</Title>
      <Container>
        <Input type='text' classVariant='light' name='room' defaultValue={currentRoom} onChange={(e) => setCurrentRoom(e.target.value)}>Game Room</Input>
        <Input type='text' classVariant='light' name='room' defaultValue={username} onChange={(e) => setUsername(e.target.value)}>Player</Input>
        <Button text='Join' handleClick={joinGame} classVariant='neonText'/>
      </Container>
    </div>
  )
}

export default JoinGame
