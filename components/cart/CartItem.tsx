import { useState, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import sessionContext from "../../context/session/context";

const CartItem = ({ item, qty, idx }: { item: Iitem; qty: number; idx: number }) => {
  // console.log(item,'from stagedItem card')
  // {
  //   key && console.log(key, 'key from cartItem');
  // }

  console.log(idx, "from cartItem ind");
  const [itemQty, setItemQty] = useState(1);
  const { IncQtyForItem, DecQtyForItem } = useContext(sessionContext);

  const incQty = () => {
    setItemQty(itemQty + 1);
  };
  const decQty = () => {
    if (itemQty == 1) {
      setItemQty(1);
    } else {
      setItemQty(itemQty - 1);
    }
  };
  return (
    <>
      <div id="cartContainer" className="flex justify-center items-center gap-2 py-1">
        <div id="cartImage" className="flex-two">
          <img src={item.bannerUrl} className="block w-full rounded-lg object-contain" />
          {/*cart image of prod.*/}
        </div>

        <div id="cartInfo" className="flex-seven flex flex-col justify-between">
          <div className="flex flex-row justify-between mb-2">
            <p className="text-sm capitalize text-smokyBlack font-medium">{item.itemName}</p>
            {/*cart product name*/}
            <p className="text-sm text-smokyBlack font-medium">${parseInt(item.price) * qty}</p>
            {/*cart product price*/}
          </div>

          <div className="flex flex-row justify-between items-end">
            <p className="text-xs text-gray-400 font-medium">
              Added by <span className="text-secondary capitalize">{localStorage.getItem("username")}</span>{" "}
              {/* user name*/}
            </p>

            <div className="text-sm flex bg-whiteColor rounded-sm shadow-sm ">
              <button
                type="button"
                onClick={() => DecQtyForItem(item.itemId, "-MglGB1mqNf5eF4QWPfZ", idx)}
                className="px-2 flex justify-center items-center"
              >
                <AiOutlineMinus className="text-secondary text-lg" />
              </button>
              <p className="px-2 text-smokyBlack">{qty}</p> {/*no of items*/}
              <button
                type="button"
                onClick={() => IncQtyForItem(item.itemId, "-MglGB1mqNf5eF4QWPfZ", idx)}
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
