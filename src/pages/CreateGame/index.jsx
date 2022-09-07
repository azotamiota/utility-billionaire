import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.css'
import { Button, Container, Footer, Input, Header, Title } from '../../components'
import { SocketContext, useRoom } from '../../context'
function CreateGame() {

  const [category, setCategory] = useState(17);
  const [difficulty, setDifficulty] = useState('easy');

 const { room, players, currentUser } = useRoom();
  const [currentRoom, setCurrentRoom] = room
  const [username, setUsername] = currentUser

  // const { data, setData } = useQuestions()
  const navigateTo = useNavigate()
  const socket = useContext(SocketContext);
  const topics = [
    { id: 9, value: 9, name: "General Knowledge"},
    { id: 10, value: 10, name: "Entertainment: Books"},
    { id: 11, value: 11, name: "Entertainment: Film"},
    { id: 12, value: 12, name: "Entertainment: Music"},
    { id: 13, value: 13, name: "Entertainment: Musicals & Theatres"},
    { id: 14, value: 14, name: "Entertainment: Television"},
    { id: 15, value: 15, name: "Entertainment: Video Games"},
    { id: 16, value: 16, name: "Entertainment: Board Games"},
    { id: 17, value: 17, name: "Science & Nature"},
    { id: 18, value: 18, name: "Science: Computers"},
  ]
  const levels = [
    {id: 1, name: 'easy', value: 'easy'},
    {id: 2, name: 'medium', value: 'medium'},
    {id: 3, name: 'hard', value: 'hard'},
  ]


  const startGame = (e) => {
    e.preventDefault()
    async function searchApi() {
      console.log(difficulty, category)
      const result = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
      // setData(result.data.results)
      console.log(username, currentRoom)
      socket.emit('send_question', {room: currentRoom, questions: result.data.results})
      socket.emit('join_room',  {username, room: currentRoom})
    }
    searchApi()
    navigateTo('/waiting')
  }

  return (
    <div className={styles.root}>
      {/* <Title>Create your utility billionaire game!</Title> */}
      <Container>
        <Input type='select' classVariant='light' name='category' defaultValue={topics} onChange={(e) => setCategory(e.target.value)}>Category</Input>
        <Input type='select' classVariant='light' name='difficulty' defaultValue={levels} onChange={(e) => setDifficulty(e.target.value)}>Difficulty</Input>
        <Input type='text' classVariant='light' name='room' defaultValue={currentRoom} onChange={(e) => setCurrentRoom(e.target.value)}>Room Name</Input>
        <Input type='text' classVariant='light' name='user' defaultValue={username}  onChange={(e) => setUsername(e.target.value)}>Username</Input>
        <Button text='Start' handleClick={startGame} classVariant='neonText'/>
      </Container>
    </div>
  )
}

export default CreateGame
