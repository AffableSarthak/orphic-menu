import { useState, useContext, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import sessionContext from "../../context/session/context";

const CartItem = ({
  item,
  qty,
  idx,
  username,
}: {
  item: Iitem;
  qty: number;
  idx: number;
  username: string;
}) => {
  // console.log(item,'from stagedItem card')
  // {
  //   key && console.log(key, 'key from cartItem');
  // }
  const [sessionId, setSessionId] = useState("");
  // console.log(idx, "from cartItem ind");
  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    setSessionId(sessionId);
  }, []);

  const { IncQtyForItem, DecQtyForItem } = useContext(sessionContext);

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
            <p className="text-sm text-smokyBlack font-medium">
              ₹{parseInt(item.price) * qty}
            </p>
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
                onClick={() => DecQtyForItem(item.itemId, sessionId, idx)}
                className="px-2 flex justify-center items-center"
              >
                <AiOutlineMinus className="text-secondary text-lg" />
              </button>
              <p className="px-2 text-smokyBlack">{qty}</p> {/*no of items*/}
              <button
                type="button"
                onClick={() => {
                  IncQtyForItem(item.itemId, sessionId, idx);
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
