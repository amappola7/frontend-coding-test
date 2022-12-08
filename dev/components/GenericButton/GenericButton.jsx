import React from 'react'
import styles from './GenericButton.module.scss'

function GenericButton({content}) {
  return (
    <button type='button' className={`${styles.genericButton}`}>{content}</button>
  )
}

export default GenericButton