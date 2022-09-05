import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './index.module.css'

import Button from "../../components/Button"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1>Utility Billionaire</h1>
        <Button text="Join Game" handleClick={() => navigate("/join")} classVariant={"neonText"}/>
        <Button text="Create Game" handleClick={() => navigate("/create")} classVariant={"neonText"}/>
      </div>
    </div>
  )
}

export default HomePage

