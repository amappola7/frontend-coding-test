import React from 'react'
import styles from './ProfileCard.module.scss'

function ProfileCard({userPicture, userName, userOccupation, userAge}) {
  const view = 'home';

  return (
    <div className={view === 'home' ? `${styles.profileCard}` : `${styles.profileCardExtended}`}>
      <picture className={styles.profileCard__userPictureContainer}>
        <source srcSet={userPicture} type="image/png" />
        <img className={styles.profileCard__userPicture} src={userPicture} alt="Logo" />
      </picture>
      <span className={styles.profileCard__userContent}>
        <span className={styles.profileCard__userInfo}>
          <p className={styles.profileCard__userName}>{userName}</p>
          <p className={styles.profileCard__userOtherInfo}>{userOccupation}</p>
          <p className={styles.profileCard__userOtherInfo}>{`Age: ${userAge}`}</p>
        </span>
        <button className={styles.profileCard__editProfileButton}>Edit Profile</button>
      </span>
    </div>
  )
}

export default ProfileCard