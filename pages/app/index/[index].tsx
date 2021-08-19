import { GetServerSideProps } from 'next'
// import sessionContext from '../../context/session/context'
// import { useContext } from 'react'
import firebase from '../../../firebase/init'
import SessionState from '../../../context/session/state'
import UserDetail from '../../../components/user-detail/UserDetail'

const db = firebase.database()

function Home(props: { tableId: string; eateryId: string; gc: Igc[] }) {
  const { tableId, eateryId, gc } = props

  return (
    <>
      <SessionState db={db} sessionProps={props}>
        <UserDetail />
      </SessionState>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, query } = context
  console.log('PARAMS', params)
  // const res = await fetch(`https://...`)
  // const data = await res.json()

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      tableId: 'T-070',
      eateryId: 'E-001',
      gc: [
        {
          id: '001',
          name: 'Choose',
          type: 'one',
          values: [
            {
              name: 'Penne',
              price: 1010,
            },
          ],
        },
      ],
    }, // will be passed to the page component as props
  }
}

export default Home
