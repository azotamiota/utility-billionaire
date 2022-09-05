import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './index.module.css'

import Button from "../../components/Button"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Welcome to Utility Billinaire!</h1>
      <Button text="Join Game" handleClick={() => navigate("/join")} classVariant="homeButtons"/>
      <Button text="Create Game" handleClick={() => navigate("/create")} classVariant="homeButtons"/>
    </div>
  )
}

export default HomePage

