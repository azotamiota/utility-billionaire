import React, {useState, useContext, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from "use-sound";

import styles from './index.module.css'
import { Button, Container, Message, Title, TotalMoney, Timer } from '../../components'
import rightAnswer from "../../../assets/sounds/correct.mp3"
import wrongAnswer from "../../../assets/sounds/wrong.mp3"
import { useQuestions, SocketContext, useRoom } from '../../context';


function Game() {
  
  const socket = useContext(SocketContext)
  const { room, players, currentUser } = useRoom();
  const [currentRoom, setCurrentRoom] = room
  const [currentPlayers, setCurrentPlayers] = players
  const [username, setUsername] = currentUser
  
  const { data } = useQuestions()
  const currentAnswer = useRef('')
  const [randomisedAnswerList, setRandomisedAnswerList] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerChosen, setAnswerChosen] = useState({index: 'none'})
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
  
  useEffect(() => {
    if (questionNumber === 9) {
      console.log('this is the last wuestion and we emit: ', {currentMoney, currentRoom, currentPlayers, username})
      socket.emit('send_result', {currentMoney, currentRoom, currentPlayers, username})
        navigate('/result')
    }
  }, [questionNumber])

  const wrong = () => {
    const wrongAnswerMessages = [
      'You suck! Who will pay for your phone bill?!', 
      'OMG! This was an elementery school level question!',
      'Nah... start begging money for a hot shower!',
      'You\'re going to freeze this winter',
      'Stock up some candles! You won\'t have money to pay for electricity',
      'I\'d buy some tinned food if I was you. No hot food next month...',
      'Surely can\'t pay the rent next month, let\'s buy a cheap tent!',
      'If you have to pay mortgage, start to worry, mate!',
      'Intermittent fasting is coming: One month eating, one month starving.',
      'Buy a thick coat before winter. Your bedromm will be like an igloo',
      ]

    setMessage(wrongAnswerMessages[Math.floor(Math.random() * wrongAnswerMessages.length)])
    
    console.log('this is the wrong answer')
    // setQuestionNumber((prev) => prev + 1)
    wrongSound()
  }

  const correct = () => {

    const correctAnswerMessages = [
      'You did well. Still shouldn\'t use the kettle too often...', 
      'Good job, now you can buy a slice of bread',
      'Not bad, but still not enough to beat inflation..',
      'Well done! Now you might be able buy one full litre of diesel',
      'Hmm, good.. Maybe this weekend begging at the corner won\'t be needed',
      'Wow, nice! You might be able to reduce your debt to -£10,000',
      'Good one! Let\'s spend some Universal Credit',
      'Quite good, pal! The bank might not take your house this month',
      'Woohoo! Finally you can top up your SIM after 6 months!',
      'Yaaay! Finally you can turn the light on while having dinner!'
      ]

    setMessage(correctAnswerMessages[Math.floor(Math.random() * correctAnswerMessages.length)])
       
    // setQuestionNumber((prev) => {
    //   if (prev < 9 ) {
    //     return prev + 1
    //   }
    // })

    setCorrectCount((prev) => prev + 1)
    
    setCurrentMoney((prev) => prev + money[correctCount].amount)
    correctSound()
  }

  const timeOut = () => {
    if (answerChosen.index !== 'none') {
      if (currentAnswer.current.trim() !== currentAnswer.current) { // this is how the program distinguish which one is the correct answer. See explanation below in comments
        correct()
      } else {
        wrong()
      }
      setAnswerChosen({index: 'none'})
    }

    setMessage('Time\'s up!')
    setTimeout(() => {
      // flashing animation with the correct answer
      setQuestionNumber((prev) => {
        if (prev < 9 ) {
          return prev + 1
        }
      })
      setAnswerChosen({index: 'none'})

    }, 5000)
    // wrongSound()
  }

  const handleClick = (e, index, answer) => {
    console.log('button has clicked')
    e.preventDefault()
    // e.target.style.backgroundColor = 'red'
    setAnswerChosen({ index })
    currentAnswer.current = answer
  }
  useEffect(() => {
    setRandomisedAnswerList([...data[questionNumber].incorrect_answers, ' ' + data[questionNumber].correct_answer + ' '].sort(() => Math.random() - 0.5))
  }, [questionNumber])

  return (
    <>
    <Timer timeOut={() => timeOut()} questionNumber={questionNumber}/>
    <div className={styles.gamediv}>
      <Container>
        {/* <TotalMoney><h3>{questionNumber + 1}. Question</h3> for £{money[correctCount].amount}</TotalMoney> */}
        <Title classVariant='question'>{data[questionNumber].question}</Title>
        {randomisedAnswerList.map((answer, index) => <Button key={index} handleClick={(e) => handleClick(e, index, answer)} text={answer.trim()} classVariant={answerChosen.index === index ? 'neonText-clicked' : 'neonText'}/>)} 
      </Container>
      {/* <TotalMoney>Total: ${currentMoney}</TotalMoney> */}
      <Message>{message}</Message>
      {/* here i want to implement a "cash" animation on the page instead of message */}
    </div>
    </>
  )
}

export default Game;
