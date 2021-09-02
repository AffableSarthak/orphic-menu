import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Model = dynamic(() => import("../../../components/glbLoad/Model"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  return <Model glbName={router.query.id} />;
}
