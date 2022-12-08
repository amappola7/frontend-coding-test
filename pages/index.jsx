import NavBar from "../dev/components/NavBar/NavBar";
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
    <NavBar />
  </div>
  )
}

export default Index;