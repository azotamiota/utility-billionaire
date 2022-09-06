import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";

import styles from './index.module.css'
import { Button, Container, Message, Title, TotalMoney, Timer } from '../../components'
import rightAnswer from "../../../assets/sounds/correct.mp3"
import wrongAnswer from "../../../assets/sounds/wrong.mp3"
import { useQuestions } from '../../context';


function Game() {

  const [questionNumber, setQuestionNumber] = useState(0);
  const { data } = useQuestions()
  console.log('data: ', data)
  
  const [message, setMessage] = useState('');
  const [currentMoney, setCurrentMoney] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [correctSound] = useSound(rightAnswer, {volume: 0.20})
  const [wrongSound] = useSound(wrongAnswer, {volume: 0.20})
  const money =
      [
        { id: 1, amount: 25 },
        { id: 2, amount: 50 },
        { id: 3, amount: 100 },
        { id: 4, amount: 1500 },
        { id: 5, amount: 3000},
        { id: 6, amount: 6000 },
        { id: 7, amount: 12500 },
        { id: 8, amount: 25000 },
        { id: 9, amount: 50000 },
        { id: 10, amount: 100000 }
      ]
  
  const navigate = useNavigate()    
  if (questionNumber > 9) {
    navigate('/result')
  }

  const wrong = () => {
   
    setMessage('You suck! How could you not know that?!')
    
    console.log('this is the wrong answer')
    setQuestionNumber((prev) => prev + 1)
    wrongSound()
  }

  const correct = () => {
   
    setMessage('You did well. You\'re still poor tho... ')
    
    setQuestionNumber((prev) => prev + 1)
    setCorrectCount((prev) => prev + 1)
    
    setCurrentMoney((prev) => prev + money[correctCount].amount)
    correctSound()
  }

  const timeOut = () => {
    
    setMessage('Time\'s up!')
  
    setQuestionNumber((prev) => prev + 1)
    wrongSound()
  }

  const handleClick = (answer) => {
    if (answer.trim() !== answer) { // this is how the program distinguish which one is the correct answer. See explanation below in comments
      correct()
    } else {
      wrong()
    }
  }

  return (
    <div>
      <Title>Welcome to Utility Billionaire Game!!</Title>
      <Timer timeOut={() => timeOut()} questionNumber={questionNumber}/>
      <Container>
        <TotalMoney><h3>{questionNumber + 1}. Question</h3> for £{money[correctCount].amount}</TotalMoney>
        <Title classVariant='question'>{data[questionNumber].question}</Title>
        {[...data[questionNumber].incorrect_answers, ' ' + data[questionNumber].correct_answer + ' '] // all answers in one array, this line makes an extra " " around the correct answer 
            .sort(() => Math.random() - 0.5)
            // as answers appear on buttons, the correct will appear like others by getting the space around trimmed
            .map((answer) => <Button key={Math.random()} handleClick={() => handleClick(answer)} text={answer.trim()} classVariant='answer'/>)} 
      </Container>
      <TotalMoney>Total: ${currentMoney}</TotalMoney>
      <Message>{message}</Message>
    </div>
  )
}

export default Game;
