import { GetServerSideProps } from 'next'
// import sessionContext from '../../context/session/context'
// import { useContext } from 'react'
import firebase from '../../../firebase/init'
import SessionState from '../../../context/session/state'
import UserDetail from '../../../components/user-detail/UserDetail'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const rId = router.query.index
  return (
    <>
      <UserDetail rId={rId} />
    </>
  )
}

export default Home
