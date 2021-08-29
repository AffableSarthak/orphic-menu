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

  const getCustPrice = (item: Iitem) => {
    if (item.customization) {
      let custPrice = 0;
      let temp = Object.entries(item.customization);
      console.log(temp, "temp from total price");
      // temp.map((s: any) => {
      //   console.log(typeof s == "object");

      //   // console.log(s.split(",")[1] * 1);
      // });

      temp.forEach((t: any) => {
        if (t[0] === "Add_On") {
          t[1].forEach((fa) => {
            custPrice += parseInt(fa.split(",")[1]);
          });
        } else {
          custPrice += parseInt(t[1].split(",")[1]);
        }
      });
      return custPrice;
    }
    return 0;
  };

  return (
    <>
      <div
        id="cartContainer"
        className="flex justify-center items-center gap-2 py-1"
      >
        <div id="cartImage" className="flex-two bg-smokyBlack rounded">
          {!item.bannerUrl ? (
            <h1 className="text-center text-whiteColor h-[57px] flex justify-center items-center text-xs">
              Coming soon...
            </h1>
          ) : (
            <>
              <img
                src={item.bannerUrl}
                className="block w-full rounded-lg object-contain"
              />
            </>
          )}

          {/*cart image of prod.*/}
        </div>

        <div id="cartInfo" className="flex-seven flex flex-col justify-between">
          <div className="flex flex-row justify-between mb-2">
            <p className="text-sm capitalize text-smokyBlack font-medium">
              {item.itemName}
            </p>
            {/*cart product name*/}
            <p className="text-sm text-smokyBlack font-medium">
              ₹{(getCustPrice(item) + parseInt(item.price)) * qty}
            </p>
            {/*cart product price*/}
          </div>

          <div className="flex flex-row justify-between items-end">
            <p className="text-xs text-gray-400 font-medium">
              Added by
              <span className="text-secondary capitalize m-2">{username}</span>
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
