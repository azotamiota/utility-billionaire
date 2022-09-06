import React from 'react'
import { Button, Container, Input, Title } from '../../components';
import styles from './index.module.css'

function JoinGame() {

  const joinGame = () => {
    console.log("this should join an existing game!")
  }

  return (
    <div>
      <Title>Join a game!</Title>
      <Container>
        <Input type='text' classVariant='light' name='room' defaultValue=''>Room Name</Input>
        <Input type='text' classVariant='light' name='room' defaultValue=''>Username</Input>
        <Button text='Join' handleClick={joinGame} classVariant='neonText'/>
      </Container>
    </div>
  )
}

export default JoinGame
