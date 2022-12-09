import Head from 'next/head'
import TaskCard from "../dev/components/TaskCard/TaskCard";
import GenericBox from "../dev/components/GenericBox/GenericBox";
import globalStyles from '../styles/globals.module.scss'

function Index() {
  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon_io/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon_io/favicon-16x16.png" />
      <link rel="manifest" href="../public/favicon_io/site.webmanifest" />
      <title>to_dosketch</title>
    </Head>
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
          <TaskCard taskTitle='Title' taskEndDate='02-04-22' taskDescription='Lorem iasdjfasdflasdf lajsdfkjasd  lasdkfja asdjf ald a aslfia lkjfsfa.'></TaskCard>
        </GenericBox>
    </div>
    </>
  )
}

export default Index;