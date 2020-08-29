import React from 'react'
import styles from '../styles/FeedbackMessage.module.scss'

const FeedbackMessage = ({ icon, label }) => {
  return (
    <div className={styles.feedback}>
      {icon && <div className={styles.feedback__icon}>{icon}</div>}
      <span className={styles.feedback__label}>{label}</span>
    </div>
  )
}

export default FeedbackMessage
