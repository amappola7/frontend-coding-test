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
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae impedit perferendis, atque quidem consequatur rerum. Quos quia hic esse ea modi numquam ex dicta asperiores fuga, veritatis eaque quidem magni?</p>
  </GenericBox>
  </div>
  )
}

export default Index;