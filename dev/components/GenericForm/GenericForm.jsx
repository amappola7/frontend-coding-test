import React from 'react'
import styles from './GenericForm.module.scss'

function GenericForm({children}) {
  return (
    <form action="#" className={`${styles.genericForm}`}>
      {children}
    </form>
  )
}

export default GenericForm