import React from 'react'
import styles from './index.module.css'
import { Button, Container, Footer, Input, Header } from '../../components'

function CreateGame() {
  const topics = [
    {id: 1, name: 'Any Category', value:0},
    {id: 2, name: 'Science', value:17},
    {id: 3, name: 'General Knowledge', value:9},
  ]
  const difficulty = [
    {id: 1, name: 'easy', value: 'easy'},
    {id: 2, name: 'medium', value: 'medium'},
    {id: 3, name: 'hard', value: 'hard'},
  ]
  const startGame = (e) => {
    e.preventDefault()
    console.log('the game will start when you crate the function')
  }
  return (
    <div className={styles.root}>
      <h1>Create your utility billionaire game!</h1>
      <Container>
        <Input type='select' classVariant='light' name='category' defaultValue={topics}>Category</Input>
        <Input type='select' classVariant='light' name='difficulty' defaultValue={difficulty}>Difficulty</Input>
        <Input type='text' classVariant='light' name='room' defaultValue=''>Room Name</Input>
        <Input type='text' classVariant='light' name='room' defaultValue=''>Username</Input>
        <Button text='Start' handleClick={startGame} classVariant='dark'/>
      </Container>
    </div>
  )
}

export default CreateGame
