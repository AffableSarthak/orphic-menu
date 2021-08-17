import "../styles/globals.css";
import EatriesState from "../context/eateries/eatriesState";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <EatriesState>
        <Component {...pageProps} />
      </EatriesState>
    </>
  );
}

export default MyApp;
