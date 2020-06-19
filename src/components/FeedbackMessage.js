import React from 'react'
import styles from '../styles/FeedbackMessage.module.scss'

const FeedbackMessage = ({ icon, label }) => {
  return (
    <div className={styles.feedback__container}>
      <div className={styles.feedback}>{icon}</div>
      <span>{label}</span>
    </div>
  )
}

export default FeedbackMessage
