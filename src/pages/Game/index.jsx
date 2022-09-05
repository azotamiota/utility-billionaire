import React, {useEffect, useState} from 'react'
import styles from './index.module.css'
import { Button, Container, Message, Title, TotalMoney } from '../../components'

function Game() {
  const [message, setMessage] = useState('');
  const [questionNumber, setQuestionNumber] =useState(0);
  const [currentMoney, setCurrentMoney] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)

  
const results = [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which company did Valve cooperate with in the creation of the Vive?",
      correct_answer: "HTC",
      incorrect_answers: [
        "Oculus",
        "Google",
        "Razer"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What does a funambulist walk on?",
      correct_answer: "A Tight Rope",
      incorrect_answers: [
        "Broken Glass",
        "Balls",
        "The Moon"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is the name of the Jewish New Year?",
      correct_answer: "Rosh Hashanah",
      incorrect_answers: [
        "Elul",
        "New Year",
        "Succoss"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
      correct_answer: "Truth",
      incorrect_answers: [
        "Answer",
        "Cause",
        "Source"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What was the first ever London Underground line to be built?",
      correct_answer: "Metropolitan Line",
      incorrect_answers: [
        "Circle Line",
        "Bakerloo Line",
        "Victoria Line"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which of the following presidents is not on Mount Rushmore?",
      correct_answer: "John F. Kennedy",
      incorrect_answers: [
        "Theodore Roosevelt",
        "Abraham Lincoln",
        "Thomas Jefferson"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which candy is NOT made by Mars?",
      correct_answer: "Almond Joy",
      incorrect_answers: [
        "M&amp;M&#039;s",
        "Twix",
        "Snickers"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What are Panama hats made out of?",
      correct_answer: "Straw",
      incorrect_answers: [
        "Silk",
        "Hemp",
        "Flax"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "Which of the following is not an Ivy League University?",
      correct_answer: "Stanford",
      incorrect_answers: [
        "University of Pennsylvania",
        "Harvard",
        "Princeton"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is the profession of Elon Musk&#039;s mom, Maye Musk?",
      correct_answer: "Model",
      incorrect_answers: [
        "Professor",
        "Biologist",
        "Musician"
      ]
    }]

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

console.log(results)
const [question, setQuestion] = useState(results[questionNumber])

useEffect(() => {
  setQuestion(results[questionNumber])
}, [questionNumber])

console.log(questionNumber)
console.log(question)

  
  const wrong = (e) => {
    e.preventDefault()
    setMessage('You suck! How could you not know that?!')
    console.log('this is the wrong answer')
    setQuestionNumber((prev) => prev + 1)
  }
  const correct = (e) => {
    e.preventDefault()
    setMessage('You did well. You\'re still poor tho... ')
    console.log('this is the correct answer')
    setQuestionNumber((prev) => prev + 1)
    setCorrectCount((prev) => prev + 1)
    setCurrentMoney((prev) => prev + money[correctCount].amount)
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