import React, {useContext, useState} from 'react'
import { Button, Container, Input, Title } from '../../components';
import styles from './index.module.css'
import { SocketContext } from '../../context'
import { useNavigate } from 'react-router-dom';
function JoinGame() {
  const socket = useContext(SocketContext);
  const navigateTo = useNavigate()
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const joinGame = () => {
    socket.emit('join_room', {username, room})
    console.log("this should join an existing game!")
    navigateTo('/waiting')
  }

  return (
    <div>
      <Title>Join a game!</Title>
      <Container>
        <Input type='text' classVariant='light' name='room' defaultValue={room} onChange={(e) => setRoom(e.target.value)}>Room Name</Input>
        <Input type='text' classVariant='light' name='room' defaultValue={username} onChange={(e) => setUsername(e.target.value)}>Username</Input>
        <Button text='Join' handleClick={joinGame} classVariant='neonText'/>
      </Container>
    </div>
  )
}

export default JoinGame
