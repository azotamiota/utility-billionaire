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
        <Button text="An app to make you rich in 2 minutes" handleClick={() => navigate("/team")} classVariant="neonText"/>
      </div>
    </div>
  )
}

export default HomePage

