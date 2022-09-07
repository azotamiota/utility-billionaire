import React, { useEffect, useContext, useState } from 'react'
import { Container, Title, UserCard } from '../../components';
import styles from './index.module.css'
import axios from 'axios'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { SocketContext } from '../../context'

function Result() {

  const socket = useContext(SocketContext);

  const [players, setPlayers] = useState([])

  // let players = [
  //   // { id: 1, username: 'Falkon', score: 600},
  //   // { id: 2, username: 'Gonzo', score: 300},
  //   // { id: 3, username: 'Rat234', score: 60},
  //   // { id: 4, username: 'FatBee34', score: 100},
  // ]
  function sortByKey(array, key) {
    return players.sort(function(a, b) {
        const x = a[key]; const y = b[key];
        return ((x > y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  socket.on('final_scores', data => {
    console.log('final results are coming in: ', data);
    console.log('players before: ', players);
    setPlayers(data)
    console.log('players after: ', players);
  })

  
  let orderedPlayers = []
  
  // useEffect(() => {
  //   orderedPlayers = sortByKey(players, 'score')
  // }, [players])
  
  useEffect(() => {

    socket.emit('page_loaded')
    const url = 'https://utility-billionaire.herokuapp.com/results'
    // players.map(player => {
    //   axios.post(url, {
    //     username: player.username,
    //     score: player.score,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // })
  }, [])


  return (
    <div>
      <h1>Welcome to results!!</h1>
      <Container>
        <Confetti/>
        <Title>Results</Title>
        <UserCard currentPlayers={sortByKey(players, 'score')} />
      </Container>
    </div>
  )
}

export default Result
