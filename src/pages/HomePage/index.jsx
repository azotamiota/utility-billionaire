import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './index.module.css'

import {Button, Title} from "../../components"

function HomePage() {

  const navigate = useNavigate()

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Title>Utility Billionaire</Title>
        <Button text="Join Game" handleClick={() => navigate("/join")} classVariant="neonText"/>
        <Button text="Create Game" handleClick={() => navigate("/create")} classVariant="neonText"/>
      </div>
    </div>
  )
}

export default HomePage

