import React from 'react'
import styles from './GenericBox.module.scss'

function GenericBox({children}) {
  return (
    <div className={`${styles.genericBox}`}>{children}</div>
  )
}

export default GenericBox