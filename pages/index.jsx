import GenericForm from "../dev/components/GenericForm/GenericForm";
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
  <GenericForm>
    <label htmlFor="">
      Hola
      <input type="text" />
    </label>
  </GenericForm>
  </div>
  )
}

export default Index;