import SessionState from '../context/session/state'
import '../styles/globals.css'
import firebase from '../firebase/init'

function MyApp({ Component, pageProps }) {
  const db = firebase.database()
  return (
    <>
      <SessionState db={db}>
        <Component {...pageProps} />
      </SessionState>
    </>
  )
}

export default MyApp
