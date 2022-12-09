import React, {useState} from 'react'
import GenericForm from '../GenericForm/GenericForm'
import styles from './ProfileForm.module.scss'

function ProfileForm({handleValueChange, action}) {
  const [valueProfileForm, setValueProfileForm] = useState({
    userFullName: '',
    userOccupation: '',
    userAge: '',
    userNickname: '',
    userGender: '',
    userPicture: '',
  })

  return (
    <GenericForm className={`${styles.profileForm}`}>
      <label>
        Full Name
        <input type="text" name='userFullName' value={valueProfileForm.userFullName} onChange={(ev) => {handleValueChange(ev, setValueProfileForm)}} placeholder='Stephen Hawking' required />
      </label>
      <label>
        Occupation
        <input type="text" name='userOccupation' value={valueProfileForm.userOccupation} onChange={(ev) => {handleValueChange(ev, setValueProfileForm)}} placeholder='Theoretical Physicist' required />
      </label>
      <label>
        Age
        <input type="number" name='userAge' value={valueProfileForm.userAge} onChange={(ev) => {handleValueChange(ev, setValueProfileForm)}} max='120' placeholder='76' required />
      </label>
      <label>
        Nickname
        <input type="text" name='userNickname' value={valueProfileForm.userNickname} onChange={(ev) => {handleValueChange(ev, setValueProfileForm)}} minLength='5' maxLength='25' placeholder='s.hawking' required />
      </label>
      <label>
        Gender
        <select name="userGender"  value={valueProfileForm.userGender} onChange={(ev) => {handleValueChange(ev, setValueProfileForm)}} id="">
          <option value="" selected>-- Gender --</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonBinary">Non binary</option>
        </select>
      </label>
      <label>
        Picture
        <input type="url" name='userPicture' value={valueProfileForm.userPicture} onChange={(ev) => {handleValueChange(ev, setValueProfileForm)}} placeholder='https://example.com' required />
      </label>
      <button type='submit'>{action}</button>
    </GenericForm>
  )
}

export default ProfileForm