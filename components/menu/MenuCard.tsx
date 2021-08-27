// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import burgerGif from "../../public/menuImages/burger.gif";
import Image from "next/image";
import sessionContext from "../../context/session/context";
import { useContext } from "react";
import { useRouter } from "next/router";

const MenuCard = (props) => {
  const { setStagedItem, getCustForItem, isLoading } =
    useContext(sessionContext);
  // const isLoading = true;
  const { item, stagedItems } = props;
  const router = useRouter();

  const cartItemInfo = (stagedItems, item) => {
    if (item.cust) {
      // Item has customization
      if (stagedItems.length === 0 || stagedItems === undefined) {
        // No Item in Cart
        return (
          // push to cart with and add the item with other details to staged items => item, count, username, cust array
          <span
            onClick={async () => {
              await getCustForItem(item);
              router.push({ pathname: `/app/cust` });
            }}
            className=" flex  justify-center items-center bg-whiteColor rounded-full px-2 py-2"
          >
            <AiOutlinePlus className="text-smokyBlack text-xl" />
            <p>cust</p>
          </span>
        );
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <span className=" flex justify-center items-center bg-whiteColor rounded-full px-2 py-2">
              {/* <AiOutlinePlus className="text-smokyBlack text-xl" /> */}
              <p className="text-primary text-sm">ADDED</p>
            </span>
          );
        } else {
          // current Item is not present in the cart
          return (
            <span
              onClick={async () => {
                await getCustForItem(item);
                router.push({ pathname: `/app/cust` });
              }}
              className=" flex justify-center items-center bg-whiteColor rounded-full px-2 py-2"
            >
              <AiOutlinePlus className="text-smokyBlack text-xl" />
              <p>cust</p>
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
          <span
            onClick={() => {
              console.log("Inside without cust item");
              setStagedItem(item, "SET_WITHOUT_CUST");
            }}
            className=" flex justify-center items-center bg-whiteColor rounded-full px-2 py-2"
          >
            <AiOutlinePlus className="text-smokyBlack text-xl" />
          </span>
        );
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <span className="flex justify-center items-center  rounded-full px-2 py-2 bg-primary text-white">
              {/* <AiOutlinePlus className="text-smokyBlack text-xl" /> */}
              Added
            </span>
          );
        } else {
          // current Item is not present in the cart
          return (
            // push to cart with and add the item with other details to staged items => item, count, username
            <span
              onClick={() => {
                setStagedItem(item, "SET_WITHOUT_CUST");
              }}
              className="flex justify-center items-center bg-whiteColor rounded-full px-2 py-2"
            >
              <AiOutlinePlus className="text-smokyBlack text-xl" />
            </span>
          );
        }
      }
    }
  };
  return (
    <>
      {/* {console.log(item, 'img container')} */}

      <div
        id="cardContainer"
        className="flex-four min-w-[224px] min-h-[324px] bg-dark rounded-[30px] my-1"
      >
        <div
          id="cardHeader"
          className="flex justify-between items-center px-4 min-h-[60px] rounded-t-[30px]"
        >
          {isLoading ? (
            <div className="bg-gray-200 h-12 w-12 animate-pulse px-20 py-14 mt-20 rounded-xl"></div>
          ) : (
            <img
              src={item.bannerUrl}
              className="block w-full min-h-[150px] object-cover"
            />
          )}
          {cartItemInfo(stagedItems, item)}
        </div>

        <div id="cardtext" className="h-14 flex justify-center items-center">
          {isLoading ? (
            <div className=" bg-gray-200 h-5 mx-1 animate-pulse rounded-md min-w-[224px]"></div>
          ) : (
            <h1 className="text-whiteColor px-4 text-base font-medium">
              {item.itemName}
            </h1>
          )}
        </div>

        <div
          id="cardFooter"
          className="px-4 flex flex-row justify-between items-center "
        >
          {isLoading ? (
            <div className=" bg-gray-200 h-5 mx-1 w-1 px-6 animate-pulse rounded-md"></div>
          ) : (
            <>
              <p className="text-whiteColor text-lg font-normal">
                ${item.price}
              </p>
              <span className="flex justify-center items-center bg-whiteColor rounded-full p-2 ">
                <FiBox className="text-3xl" />
              </span>
            </>
          )}

          <span className="flex flex-row justify-center items-end bg-whiteColor rounded-full px-2 py-2">
            <FiBox className="text-3xl" />
          </span>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
