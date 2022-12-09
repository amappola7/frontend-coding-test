import React, {useState} from 'react'
import GenericForm from '../GenericForm/GenericForm'
import styles from './TaskForm.module.scss'

function TaskForm({handleValueChasnge, action}) {
  const [valueTaskForm, setValueTaskForm] = useState({
    taskTitle: '',
    taskDescription: '',
    taskStatus: false,
    taskStartDate: '',
    taskEndDate: '',
  })

  const handleValueChange = (ev, setState) => {
    setState((prevState) => (
      {
        ...prevState,
        [ev.target.name]: ev.target.value,
      }
    ))
  }

  return (
    <GenericForm>
    <label>
      Title
      <input type="text" name='taskTitle' value={valueTaskForm.taskTitle} onChange={(ev) => {handleValueChange(ev, setValueTaskForm)}} placeholder='Task' required />
    </label>
    <label>
      Description
      <textarea type="text" name='taskDescription' value={valueTaskForm.taskDescription} onChange={(ev) => {handleValueChange(ev, setValueTaskForm)}} placeholder='This is the task description' required />
    </label>
    <label>
      Status
      <select name="taskStatus"  value={valueTaskForm.taskStatus} onChange={(ev) => {handleValueChange(ev, setValueTaskForm)}}>
        <option value="" selected>-- Status --</option>
        <option value="true">Completed</option>
        <option value="false">Pending</option>
      </select>
    </label>
    <label>
      Start Date
      <input type="date" name='taskStartDate' value={valueTaskForm.taskStartDate} onChange={(ev) => {handleValueChange(ev, setValueTaskForm)}} required />
    </label>
    <label>
      End Date
      <input type="date" name='taskEndDate' value={valueTaskForm.taskEndDate} onChange={(ev) => {handleValueChange(ev, setValueTaskForm)}} />
    </label>
    <button type='submit'>{action}</button>
  </GenericForm>
  )
}

export default TaskForm