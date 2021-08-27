import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import sessionContext from "../../context/session/context";

const CartItem = ({ stagedItem }: { stagedItem: IstagedItem }) => {
  // console.log(item,'from stagedItem card')
  const { updateQytForItem } = useContext(sessionContext);
  const { item, qty, itemId, username } = stagedItem;

  const handleQty = async (itemId, qty) => {
    // if (qty <= 0) {
    //   await removeItem(itemId);
    // } else {
    // }
    await updateQytForItem(itemId, qty);
  };
  // console.log(item, qty, itemId, username);
  return (
    <>
      <div
        id="cartContainer"
        className="flex justify-center items-center gap-2 py-1"
      >
        <div id="cartImage" className="flex-two">
          <img
            src={item.bannerUrl}
            className="block w-full rounded-lg object-contain"
          />
          {/*cart image of prod.*/}
        </div>

        <div id="cartInfo" className="flex-seven flex flex-col justify-between">
          <div className="flex flex-row justify-between mb-2">
            <p className="text-sm capitalize text-smokyBlack font-medium">
              {item.itemName}
            </p>
            {/*cart product name*/}
            <p className="text-sm text-smokyBlack font-medium">${item.price}</p>
            {/*cart product price*/}
          </div>

          <div className="flex flex-row justify-between items-end">
            <p className="text-xs text-gray-400 font-medium">
              Added by{" "}
              <span className="text-secondary capitalize">{username}</span>{" "}
              {/* user name*/}
            </p>

            <div className="text-sm flex bg-whiteColor rounded-sm shadow-sm ">
              <button
                type="button"
                onClick={() => {
                  const newQty = qty - 1;
                  handleQty(itemId, newQty);
                }}
                className="px-2 flex justify-center items-center"
              >
                <AiOutlineMinus className="text-secondary text-lg" />
              </button>
              <p className="px-2 text-smokyBlack">{qty}</p> {/*no of items*/}
              <button
                type="button"
                onClick={() => {
                  const newQty = qty + 1;
                  handleQty(itemId, newQty);
                }}
                className="px-2 flex justify-center items-center"
              >
                <AiOutlinePlus className="text-secondary text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
