import React, {useState} from 'react'
import styles from './index.module.css'
import { Button, Container, Message, Title, TotalMoney } from '../../components'

function Game() {
  const question = {
    category: "General Knowledge",
    difficulty: "easy",
    type: "multiple",
    question: "Which company did Valve cooperate with in the creation of the Vive?",
    correct_answer: "HTC",
    incorrect_answers: [
      "Oculus",
      "Google",
      "Razer"
      ]
    }
  const [message, setMessage] = useState('')
  const wrong = (e) => {
    e.preventDefault()
    setMessage('You suck! How could you not know that?!')
    console.log('this is the wrong answer')
  }
  const correct = (e) => {
    e.preventDefault()
    setMessage('You did well. You\'re still poor tho... ')
    console.log('this is the correct answer')
  }
  const answersArray = []
  answersArray.push(...question.incorrect_answers.map(a => { return {answer: a, handleClick: wrong}}), {answer: question.correct_answer, handleClick: correct})
  answersArray.sort(() => Math.random() - 0.5)
  const total = 100

  return (
    <div>
      <Title>Welcome to Utility Billionaire Game!!</Title>
      <div>timer</div>
      <Container>
        <TotalMoney>question for $10</TotalMoney>
        <Title classVariant='question'>{question.question}</Title>
        {answersArray.map((a, i) => <Button key={i} handleClick={a.handleClick} text={a.answer} classVariant='answer'/>)}
      </Container>
      <TotalMoney>Total: ${total}</TotalMoney>
      <Message>{message}</Message>
    </div>
  )
}

export default Game