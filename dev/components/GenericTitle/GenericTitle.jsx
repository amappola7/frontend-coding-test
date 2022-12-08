import React from 'react'
import GenericButton from '../GenericButton/GenericButton'
import styles from './GenericTitle.module.scss'

function GenericTitle({title, contentButton}) {
  return (
    <div className={`${styles.genericTitle}`}>
      <span>
        <h1>{title}</h1>
        <GenericButton content={contentButton}/>
      </span>
    </div>
  )
}

export default GenericTitle
