import React, { useEffect } from 'react'
import { Container, Title, UserCard } from '../../components';
import styles from './index.module.css'
import axios from 'axios'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function Result() {
  const players = [
    { id: 1, username: 'Falkon', score: 600},
    { id: 2, username: 'Gonzo', score: 300},
    { id: 3, username: 'Rat234', score: 60},
    { id: 4, username: 'FatBee34', score: 100},
  ]
  function sortByKey(array, key) {
    return players.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  useEffect(() => {
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
  const orderedPlayers = sortByKey(players, 'score')
  return (
    <div className={styles.resultdiv}>
      <Container>
        <Confetti/>
        <Title>Results</Title>
        {orderedPlayers.map(u => <UserCard username={u.username} score={u.score} key={u.id} classVariant="normal" />)}
      </Container>
    </div>
  )
}

export default Result
