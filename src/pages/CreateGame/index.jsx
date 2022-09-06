import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.css'
import { Button, Container, Footer, Input, Header, Title } from '../../components'
import { useQuestions } from '../../context'

function CreateGame() {
  const [username, setUsername] = useState(null);
  const [category, setCategory] = useState(17);
  const [difficulty, setDifficulty] = useState('easy');
  const [start, setStart] = useState(false)
  const { data, setData } = useQuestions()
  const navigateTo = useNavigate()
  const topics = [
    {id: 1, name: 'Any Category', value:0},
    {id: 2, name: 'Science', value:17},
    {id: 3, name: 'General Knowledge', value:9},
  ]
  const levels = [
    {id: 1, name: 'easy', value: 'easy'},
    {id: 2, name: 'medium', value: 'medium'},
    {id: 3, name: 'hard', value: 'hard'},
  ]

  const startGame = (e) => {
    e.preventDefault()
    async function searchApi() {
      const result = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
      setData(result.data.results)
      navigateTo('/game')
    }
    searchApi()
  }

  return (
    <div className={styles.root}>
      <Title>Create your utility billionaire game!</Title>
      <Container>
        <Input type='select' classVariant='light' name='category' defaultValue={topics}>Category</Input>
        <Input type='select' classVariant='light' name='difficulty' defaultValue={levels}>Difficulty</Input>
        <Input type='text' classVariant='light' name='room' defaultValue=''>Room Name</Input>
        <Input type='text' classVariant='light' name='room' defaultValue=''>Username</Input>
        <Button text='Start' handleClick={startGame} classVariant='neonText'/>
      </Container>
    </div>
  )
}

export default CreateGame
