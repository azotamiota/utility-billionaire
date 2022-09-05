import React from 'react'
import { Button, Container, Input, Title } from '../../components';
import styles from './index.module.css'

function JoinGame() {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('this should connect me to the right room')
  }
  return (
    <div>
      <Title>Welcome to Join Game page!!</Title>
      <Container>
        <Input type='text' classVariant='light'>Enter Room Name</Input>
        <Input type='text' classVariant='light'>Choose your username</Input>
        <Button classVariant='dark' text='Join Room' handleClick={handleClick}></Button>
      </Container>
    </div>
  )
}

export default JoinGame
