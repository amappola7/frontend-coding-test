import GenericButton from "../dev/components/GenericButton/GenericButton";
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
  <GenericButton content='TEXT'/>
  </div>
  )
}

export default Index;