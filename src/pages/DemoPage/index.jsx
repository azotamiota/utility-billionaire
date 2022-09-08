import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './index.module.css'

import {Button, Title} from "../../components"

function DemoPage() {

  const navigate = useNavigate()

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Title>Live Demo</Title>
        <a href="https://utility-billionare.netlify.app/"><Button text="Utility Billionaire" classVariant="neonText"/></a>
      </div>
    </div>
  )
}

export default DemoPage