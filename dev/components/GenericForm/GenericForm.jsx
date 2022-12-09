import React from 'react'
import styles from './GenericForm.module.scss'

function GenericForm({children}) {
  const handleValueChange = (ev, setState) => {
    setState((prevState) => (
      {
        ...prevState,
        [ev.target.name]: ev.target.value,
      }
    ))
  }

  return (
    <form action="#" className={`${styles.genericForm}`} handleValueChange={handleValueChange}>
      {children}
    </form>
  )
}

export default GenericForm