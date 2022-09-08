import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './index.module.css'

import {Button, Title} from "../../components"

function PlanningPage() {

  const navigate = useNavigate()

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Title>Planning and Delivery</Title>
        {/* Insert the rest here */}
      </div>
    </div>
  )
}

export default PlanningPage