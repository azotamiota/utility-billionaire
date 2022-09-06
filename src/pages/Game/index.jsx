import React, {useEffect, useState} from 'react'
import axios from 'axios'
import useSound from "use-sound";

import styles from './index.module.css'
import { Button, Container, Message, Title, TotalMoney } from '../../components'
import play from "../../../assets/sounds/play.mp3"
import rightAnswer from "../../../assets/sounds/correct.mp3"
import wrongAnswer from "../../../assets/sounds/wrong.mp3"
import { useQuestions } from '../../context';

function Game() {
  const [message, setMessage] = useState('');
  const [questionNumber, setQuestionNumber] =useState(0);
  const [currentMoney, setCurrentMoney] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [playSound] =useSound(play, {volume: 0.20})
  const [correctSound] = useSound(rightAnswer, {volume: 0.20})
  const [wrongSound] = useSound(wrongAnswer, {volume: 0.20})
  const { data } = useQuestions()

    const money =
        [
          { id: 1, amount: 250000 },
          { id: 2, amount: 500000 },
          { id: 3, amount: 1000000 },
          { id: 4, amount: 15000000 },
          { id: 5, amount: 30000000},
          { id: 6, amount: 60000000 },
          { id: 7, amount: 125000000 },
          { id: 8, amount: 250000000 },
          { id: 9, amount: 500000000 },
          { id: 10, amount: 1000000000 }
        ]

const [question, setQuestion] = useState(data[questionNumber])

useEffect(() => {
  setQuestion(data[questionNumber])
}, [questionNumber])
  
  const wrong = (e) => {
    e.preventDefault()
    setMessage('You suck! How could you not know that?!')
    console.log('this is the wrong answer')
    setQuestionNumber((prev) => prev + 1)
    wrongSound()
  }
  const correct = (e) => {
    e.preventDefault()
    setMessage('You did well. You\'re still poor tho... ')
    console.log('this is the correct answer')
    setQuestionNumber((prev) => prev + 1)
    setCorrectCount((prev) => prev + 1)
    setCurrentMoney((prev) => prev + money[correctCount].amount)
    correctSound()
  }

  const answersArray = []
  answersArray.push(...question.incorrect_answers.map(a => { return {answer: a, handleClick: wrong}}), {answer: question.correct_answer, handleClick: correct})
  answersArray.sort(() => Math.random() - 0.5)


  return (
    <div>
      <Title>Welcome to Utility Billionaire Game!!</Title>
      <div>timer</div>
      <Container>
        <TotalMoney>question for £{money[correctCount].amount}</TotalMoney>
        <Title classVariant='question'>{question.question}</Title>
        {answersArray.map((a, i) => <Button key={i} handleClick={a.handleClick} text={a.answer} classVariant='answer'/>)}
      </Container>
      <TotalMoney>Total: ${currentMoney}</TotalMoney>
      <Message>{message}</Message>
    </div>
  )
}

export default Game