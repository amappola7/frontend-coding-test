import ProfileCard from "../dev/components/ProfileCard/ProfileCard";
import GenericBox from "../dev/components/GenericBox/GenericBox";
import globalStyles from '../styles/globals.module.scss'

function Index() {
  return (
  <div>
    <style jsx global>
      {`
        html {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 62.5%;
          color: #202124;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    </style>
      <GenericBox>
        <ProfileCard userPicture='https://image.shutterstock.com/mosaic_250/2780032/1714666150/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-1714666150.jpg' userName='Harvey Specter' userOccupation='Lawyer' userAge='20'  />
      </GenericBox>
  </div>
  )
}

export default Index;