// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import sessionContext from "../../context/session/context";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import PopularCard from "./PopularCard";
import Button from "../common/Button";
// import Model from "../glbLoad/Model";

import dynamic from "next/dynamic";

const Model = dynamic(() => import("../glbLoad/Model"), {
  ssr: false,
});

const MenuCard = (props) => {
  const { setStagedItem, getCustForItem, isLoading, setCurrentItem } =
    useContext(sessionContext);
  // const isLoading = true;
  const { item, stagedItems, bgColor, imgUrl } = props;
  const router = useRouter();

  const [sub, setSub] = useState([]);

  const cartItemInfo = (stagedItems, item) => {
    if (item.cust) {
      // Item has customization
      if (stagedItems.length === 0 || stagedItems === undefined) {
        // No Item in Cart
        return (
          // push to cart with and add the item with other details to staged items => item, count, username, cust array
          <span
            onClick={async () => {
              await setCurrentItem(item);
              // console.log(item, "from cartItemInfo");
              await getCustForItem(item);
              router.push({ pathname: `/app/cust` });
            }}
            className=" flex  justify-center items-center bg-whiteColor active:bg-primary rounded-full px-2 py-2"
          >
            <AiOutlinePlus className="text-smokyBlack text-xl" />
            {/* <p>cust</p> */}
          </span>
        );
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <></>
            // <span className=" flex justify-center items-center rounded-full px-2 py-2 bg-primary">
            //   <p className="text-black text-sm">Added</p>
            // </span>
          );
        } else {
          // current Item is not present in the cart
          return (
            <span
              onClick={async () => {
                await setCurrentItem(item);
                await getCustForItem(item);
                router.push({ pathname: `/app/cust` });
              }}
              className=" flex justify-center items-center bg-whiteColor  active:bg-primary rounded-full px-2 py-2"
            >
              <AiOutlinePlus className="text-smokyBlack text-xl" />
              {/* <p>cust</p> */}
            </span>
          );
        }
      }
    } else {
      // No customization for the item
      if (stagedItems.length === 0 || stagedItems === undefined) {
        // No Item in Cart
        return (
          // push to cart with and add the item with other details to staged items => item, count, username
          <></>
          // <span
          //   onClick={() => {
          //     setStagedItem(item, "SET_WITHOUT_CUST");
          //   }}
          //   className=" flex justify-center items-center bg-whiteColor active:bg-primary rounded-full px-2 py-2"
          // >
          //   <AiOutlinePlus className="text-smokyBlack text-xl" />
          // </span>
        );
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <></>
            // <span className="flex justify-center items-center  rounded-full px-2 py-2 bg-primary text-dark text-sm">
            //   Added
            // </span>
          );
        } else {
          // current Item is not present in the cart
          return (
            // push to cart with and add the item with other details to staged items => item, count, username
            <></>
            // <span
            //   onClick={() => {
            //     setStagedItem(item, "SET_WITHOUT_CUST");
            //   }}
            //   className="flex justify-center items-center bg-whiteColor  active:bg-primary rounded-full px-2 py-2"
            // >
            //   <AiOutlinePlus className="text-smokyBlack text-xl" />
            // </span>
          );
        }
      }
    }
  };

  return (
    <>
      {/* {console.log(item, "img container")} */}
      {/* {console.log(item.subCategory)} */}

      {/* {item.subCategory ? (
        <PopularCard item={item} />
      ) : ( */}
      <div
        id="cardContainer"
        className={`flex-four min-w-[200px] min-h-[150px] bg-dark rounded-[30px] my-2`}
      >
        <div
          id="cardHeader"
          className="flex justify-between items-center px-4 min-h-[60px] rounded-t-[30px]"
        >
          {isLoading ? (
            <>
              <p className="bg-gray-500 h-5  w-10 px-6 animate-pulse rounded-md"></p>
              <span className="bg-gray-500 h-5 mx-1 w-1 px-6 animate-pulse rounded-md"></span>
            </>
          ) : (
            <>
              <p className="text-white">{item.itemId}</p>
              {/* {cartItemInfo(stagedItems, item)} */}
            </>
          )}
        </div>
        {/* <div id="imgContainer" className=" mt-2 ">
          {isLoading ? (
            <>
              <div className="h-[130px] mb-5 w-11/12 mx-auto animate-pulse rounded-md bg-gray-500"></div>
            </>
          ) : (
            <>
              {!item.bannerUrl ? (
                <h1
                  className={`text-dark text-md text-center rounded-2xl ${bgColor} my-10 mx-4 h-[150px] flex justify-center items-center shadow-2xl `}
                >
                  <img src={imgUrl} className="w-[45px] h-[45px] m-2" />
                  Image Unavailable
                </h1>
              ) : (
                <>
                <img
                  src={item.bannerUrl}
                  className="block w-full min-h-[150px] object-cover"
                />
                //@ts-ignore
                <Model
                  glbName={`${
                    item.itemId.split("-")[1].toString() * 1
                  }_processed`}
                />
                </>
              )}
            </>
          )}
        </div> */}

        <div className="min-h-[49px]">
          {isLoading ? (
            <div className="bg-gray-500 h-5 w-11/12 mx-auto px-6 animate-pulse rounded-md"></div>
          ) : (
            <h1 className="text-whiteColor px-4 m-2 text-base font-medium">
              {item.itemName}
            </h1>
          )}
        </div>

        <div className="flex justify-between items-end px-4 pb-4">
          {isLoading ? (
            <>
              <p className="flex-7 w-8/12 bg-gray-500 h-5  mx-auto px-6 animate-pulse rounded-md"></p>
              <span className="flex-2 bg-gray-500 h-5 mx-auto px-6 animate-pulse rounded-md"></span>
            </>
          ) : (
            <>
              <p className="text-whiteColor text-lg font-normal">
                ₹{item.price}
              </p>
              {item.bannerUrl && (
                <a
                  target="_blank"
                  href={`https://asia-south1-onpar-ar.cloudfunctions.net/app?url=${
                    item.itemId.split("-")[1].toString() * 1
                  }_processed.glb`}
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-whiteColor rounded-full p-2 active:bg-primary hover:bg-primary "
                >
                  <FiBox className="text-3xl" />
                </a>
                // <button
                //   onClick={() => {
                //     router.push("/app/model/44_processed");
                //   }}
                //   className="flex justify-center items-center bg-whiteColor rounded-full p-2 active:bg-primary hover:bg-primary"
                // >
                //   <FiBox className="text-3xl" />
                // </button>
              )}
            </>
          )}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default MenuCard;
