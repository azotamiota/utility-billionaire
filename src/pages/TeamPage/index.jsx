import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './index.module.css'

import {Button, Title} from "../../components"

function TeamPage() {

  const navigate = useNavigate()

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Title>The Team</Title>
        <div className={styles.innerInnerContainer}>
            <Button text="Ioana Gheorghias" classVariant="neonText"/>
            <Button text="John Pascual" classVariant="neonText"/>
            <Button text="Aggie Skorska" classVariant="neonText"/>
            <Button text="Norbert Majer" classVariant="neonText"/>
        </div>
      </div>
    </div>
  )
}

export default TeamPage