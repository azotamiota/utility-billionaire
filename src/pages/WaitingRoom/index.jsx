import React, {useEffect} from 'react'
import styles from './index.module.css'
import io from 'socket.io-client';

import { Button, Container, UserCard } from "../../components"

// const url = 'https://utility-billionaire.herokuapp.com'    // uncomment that you want to use as backend server
const url = 'http://localhost:5000' 
const socket = io.connect(url)

function WaitingRoom() {
  
  // useEffect(()=> {
  //   console.log('sdfas')
  // }, [socket])

  const startGame = () => {
    console.log("this should start the game!")
  }

  const players = ["player1", "player2", "player3", "player4"] // needs functionality with socketIO?

  return (
    <div>
      <h1>Room name</h1> {/*should display actual room name!*/}
      {players.length === 4 ? <h2>You're lobby is ready to play!</h2> : <h2>Waiting for more players...</h2>}
      <Container>
        {players.map((p, i) => <UserCard key={i} username={p} classVariant='normal'/>)}
        <Button text="Start" handleClick={startGame} classVariant="dark"/>
      </Container>
    </div>
  )
}

export default WaitingRoom
