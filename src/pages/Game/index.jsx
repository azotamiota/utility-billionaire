import React, {useState, useContext, useEffect, useRef, useReducer} from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";

import { Button, Container, Title, TotalMoney, Timer } from '../../components'
import rightAnswer from "../../../assets/sounds/correct.mp3"
import wrongAnswer from "../../../assets/sounds/wrong.mp3"
import { useQuestions, SocketContext, useRoom } from '../../context';

import styles from './index.module.css'

function Game() {
  
  const socket = useContext(SocketContext)
  const { room, players, currentUser } = useRoom();
  const [currentRoom, ] = room
  const [currentPlayers, ] = players
  const [username, ] = currentUser
  
  const { data } = useQuestions()
  const currentAnswer = useRef('')
  const answerChosen = useRef('none')
  const [randomisedAnswerList, setRandomisedAnswerList] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false)
  const [message, setMessage] = useState('');
  const [currentMoney, setCurrentMoney] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [correctSound] = useSound(rightAnswer, {volume: 0.20})
  const [wrongSound] = useSound(wrongAnswer, {volume: 0.20})
  const money =
      [
        { id: 1, amount: 250 },
        { id: 2, amount: 500 },
        { id: 3, amount: 1000 },
        { id: 4, amount: 2000 },
        { id: 5, amount: 4000},
        { id: 6, amount: 8000 },
        { id: 7, amount: 16000 },
        { id: 8, amount: 40000 },
        { id: 9, amount: 100000 },
        { id: 10, amount: 1000000 }
      ]
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  const navigate = useNavigate()
  const correctAnswerMessages = [
      'You did well. Still shouldn\'t use the kettle too often.', 
      'Good job, now you can buy a slice of bread.',
      'Not bad, but still not enough to beat inflation.',
      'Well done! Now you might be able buy one full litre of diesel.',
      'Hmm, good.. Maybe this weekend begging at the corner won\'t be needed.',
      'Wow, nice! You might be able to reduce your debt to -£10,000.',
      'Good one! Let\'s celebrate with a glass of water!',
      'Quite good, pal! The bank might not take your house this month.',
      'Woohoo! Finally you can top up your SIM after 6 months!',
      'Yaaay! Finally you can turn the light on while having dinner!'
      ]
  const wrongAnswerMessages = [
      'You failed! Who will pay for your phone bill?!', 
      'OMG! This was an elementery school level question!',
      'Nah... start begging money for taking a hot shower!',
      'You\'re going to freeze this winter.',
      'Stock up some candles! You won\'t have money to pay for electricity.',
      'I\'d buy some tinned food if I was you. No hot food next month...',
      'Surely can\'t pay the rent next month, time to buy a tent!',
      'If you have to pay mortgage, start to worry, mate!',
      'Intermittent fasting is coming: One month eating, one month starving.',
      'Buy a thick coat before winter. Your bedroom will be like an igloo',
      ]

  
  useEffect(() => {
    if (questionNumber === 10) {
      socket.emit('send_result', {currentMoney, currentRoom, currentPlayers, username})
        navigate('/result')
    }
  }, [questionNumber])

  const wrong = () => {    
    setMessage(wrongAnswerMessages[Math.floor(Math.random() * wrongAnswerMessages.length)])
    wrongSound()
  }
  
  const correct = () => {
    setMessage(correctAnswerMessages[Math.floor(Math.random() * correctAnswerMessages.length)])
    setCorrectCount((prev) => prev + 1)
    setCurrentMoney((prev) => prev + money[correctCount].amount)
    correctSound()
  }
  
  const timeOut = () => {
    if (answerChosen.current !== 'none') {
      if (currentAnswer.current.trim() !== currentAnswer.current) { // this is how the program distinguish which one is the correct answer. See explanation below in comments
        correct()
      } else {
        wrong()
      }
    } else {
      setMessage(wrongAnswerMessages[Math.floor(Math.random() * wrongAnswerMessages.length)])
      wrongSound()
    }

    setRevealAnswer(true)
    setTimeout(() => {
      setRevealAnswer(false)
      setQuestionNumber((prev) => {
        if (prev < 9 ) {
          return prev + 1
        }
      })
      answerChosen.current = 'none'

    }, 5000)
  }

  const handleClick = (e, index, answer) => {
    e.preventDefault()
    currentAnswer.current = answer
    answerChosen.current = index
    forceUpdate()
  }

  useEffect(() => {
    setRandomisedAnswerList([...data[questionNumber].incorrect_answers, ' ' + data[questionNumber].correct_answer + ' '].sort(() => Math.random() - 0.5))
  }, [questionNumber])

  return (
    <>
    <Timer timeOut={() => timeOut()} questionNumber={questionNumber}/>
    <TotalMoney divName="totalMoneyDiv"><h3>Total: £{currentMoney}</h3></TotalMoney>
    <div className={styles.gamediv}>
      <Container>
        <Title classVariant='question'>{`${questionNumber + 1}. ${data[questionNumber].question}`}</Title>
        <TotalMoney divName="questionMoneyDiv"><h3>£{money[correctCount].amount}</h3></TotalMoney>
        {randomisedAnswerList.map((answer, index) => <Button key={index} handleClick={(e) => handleClick(e, index, answer)} text={answer.trim()} classVariant={ (() => {
            if (revealAnswer && answer[0] == " ") {
              return answerChosen.current === 'none' || answerChosen.current !== index ? 'neonText-correct' : 'neonText-correct-flash'
            }
            if (revealAnswer && answer[0] !== " ") {
              return answerChosen.current === index ? 'neonText-incorrect' : 'neonText'
            }
            return answerChosen.current === index ? 'neonText-clicked' : 'neonText'
          })()


          }/>)} 
      </Container>
      <Title classVariant='question'>{message}</Title>
    </div>
    </>
  )
}

export default Game;
