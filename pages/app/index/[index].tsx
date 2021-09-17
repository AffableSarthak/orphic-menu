import { GetServerSideProps } from "next";
// import sessionContext from '../../context/session/context'
// import { useContext } from 'react'
import UserDetail from "../../../components/user-detail/UserDetail";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const rId = router.query.index;
  return (
    <>
      <UserDetail rId={rId as string} />
    </>
  );
}

export default Home;
