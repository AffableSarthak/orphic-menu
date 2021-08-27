import { IoIosArrowBack } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import MenuCard from "./MenuCard";
import PopularCard from "./PopularCard";
import sessionContext from "../../context/session/context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import BackButton from "../common/BackButton";
import CartButton from "../common/CartButton";
import OrphicLoader from "../common/OrphicLoader";
import CommunityNotification from "../common/CommunityNotification";

const Menu = ({ categoryName }) => {
  const { items, username, categories, gcState, stagedItems, isLoading } =
    useContext(sessionContext);
  const router = useRouter();

  // const isLoading = true;

  const [rId, setRId] = useState("");

  useEffect(() => {
    const rId = localStorage.getItem("rId");
    setRId(rId);
    if (items.length === 0) router.push(`/app/categories/${rId}`);
  }, []);

  // console.log({ rId });
  console.log(items, stagedItems);

  return (
    <>
      {/* {isLoading ? <OrphicLoader /> : ''} */}
      <OrphicLoader isLoading={isLoading} />
      <section className="relative min-w-full min-h-screen">
        <div
          id="menuHeaderConatiner"
          className="flex flex-row justify-between items-center min-w-full h-40 px-4 bg-menu bg-cover bg-no-repeat object-center text-white"
        >
          <div id="menuHeaderBack" className="flex flex-row items-center">
            <BackButton />
            <h3 className="ml-2 font-bold">{categoryName}</h3>
          </div>

          <CartButton />
        </div>

        <CommunityNotification />
        <div className="mt-14 p-4">
          <h2 className="text-lg font-semibold px-4">Recommend</h2>
        </div>

        <div className="flex flex-row items-center gap-4 overflow-x-auto px-4">
          {items.map((item, index) => (
            <MenuCard key={index} item={item} stagedItems={stagedItems} />
          ))}
        </div>

        {/* <div className="mt-5">
          <h2 className="text-lg font-semibold px-4">Popular Now</h2>

          <PopularCard />
        </div> */}
      </section>
    </>
  );
};

export default Menu;
