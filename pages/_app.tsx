import SessionState from "../context/session/state";
import "../styles/globals.css";
import firebase from "../firebase/init";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const db = firebase.database();
  return (
    <>
      <Head>
        <title>ORPHIC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <SessionState db={db}>
        <Component {...pageProps} />
      </SessionState>
    </>
  );
}

export default MyApp;
