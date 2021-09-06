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
import { route } from "next/dist/next-server/server/router";
import SubMenu from "./SubMenu";
import DisclosureCard from "./DisclosureCard";

const Menu = ({ categoryName, bgColor, gc, imgUrl, custType }) => {
  const {
    items,
    username,
    categories,
    gcState,
    stagedItems,
    isLoading,
    setCategoryItems,
    populateGc,
  } = useContext(sessionContext);
  const router = useRouter();

  // const isLoading = true;

  useEffect(() => {
    const rId = typeof window !== "undefined" && localStorage.getItem("rId");
    // console.log(items, "from menu");
    setCategoryItems(categoryName);

    // if (items.length === null) router.push(`/app/categories/${rId}`);
    // console.log(items.length === undefined);
  }, []);

  useEffect(() => {
    {
      (async () => {
        await populateGc(gc);
      })();
    }
  }, []);

  // console.log({ rId });
  // console.log(items, stagedItems);

  return (
    <>
      {/* <OrphicLoader isLoading={isLoading} /> */}

      <section className="relative min-w-full min-h-screen pb-4">
        <div
          id="menuHeaderConatiner"
          className={`flex flex-row justify-between items-center min-w-full h-40 px-4 ${bgColor} bg-cover bg-no-repeat object-center text-white`}
        >
          <div id="menuHeaderBack" className="flex flex-row items-center">
            {typeof window !== "undefined" && <BackButton />}

            {/* <h3 className="ml-2 text-lg font-bold text-black mr-3">
              {categoryName}
            </h3> */}
            <img src={imgUrl} className="w-[50px] h-[50px] ml-4" />
          </div>

          {/* <CartButton /> */}
        </div>

        {/* <CommunityNotification /> */}

        {items.length !== 0 ? (
          <>
            <div className="mt-6 p-4">
              <h2 className="text-xl font-black px-4">
                {categoryName} {custType}
              </h2>
            </div>

            {categoryName === "Beverages" ? (
              <SubMenu
                items={[...items]}
                stagedItems={stagedItems}
                bgColor={bgColor}
                imgUrl={imgUrl}
              />
            ) : (
              <div
                className={`flex flex-col overflow-x-auto px-2 items-center`}
              >
                {items.map((item, index) => {
                  // console.log(item.subCategory);
                  return (
                    // <MenuCard
                    //   key={index}
                    //   item={item}
                    //   stagedItems={stagedItems}
                    //   bgColor={bgColor}
                    //   imgUrl={imgUrl}
                    // />
                    <DisclosureCard
                      item={item}
                      stagedItems={stagedItems}
                      bgColor={bgColor}
                      imgUrl={imgUrl}
                      key={index}
                    />
                  );
                })}
              </div>
            )}

            {/* <div className="mt-5">
          <h2 className="text-lg font-semibold px-4">Popular Now</h2>

          <PopularCard />
        </div> */}
          </>
        ) : (
          <>
            <h1 className="mt-16 text-center bg-whiteColor py-2 mx-2 border shadow-lg rounded-xl">
              No Items for this category...
            </h1>
          </>
        )}
      </section>
    </>
  );
};

export default Menu;
