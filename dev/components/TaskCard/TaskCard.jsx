import React from 'react'
import styles from './TaskCard.module.scss'

function TaskCard({taskTitle, taskEndDate, taskDescription}) {
  const completed = false;
  return (
    <div className={`${styles.taskCard}`}>
      <span className={styles.taskCard__taskButtons}>
        <button className={styles.taskCard__completeTaskButton}>{completed === false ? <i class="fa-regular fa-square-check"></i> : <i class="fa-solid fa-square-check"></i>}</button>
        <button className={styles.taskCard__editTaskButton}>Edit</button>
      </span>
      <span className={styles.taskCard__taskInfo}>
        <p className={styles.taskCard__taskTitle}>{taskTitle}</p>
        <p className={styles.taskCard__taskEndDate}>{`End date: ${taskEndDate}`}</p>
        <p className={styles.taskCard__taskDescription}>{taskDescription}</p>
      </span>
    </div>
  )
}

export default TaskCard