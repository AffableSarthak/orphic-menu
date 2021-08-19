import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartItem = () => {
  return (
    <>
      <div id="cartContainer" className="flex justify-center items-center gap-2 py-1">
        <div id="cartImage" className="flex-two">
          <img
            src="https://images.freekaamaal.com/post_images/1606817930.jpg"
            className="block w-full rounded-lg object-contain"
          />
          {/*cart image of prod.*/}
        </div>

        <div id="cartInfo" className="flex-seven flex flex-col justify-between">
          <div className="flex flex-row justify-between mb-2">
            <p className="text-sm capitalize text-smokyBlack font-medium">Spicy monsturous lamb</p>{" "}
            {/*cart product name*/}
            <p className="text-sm text-smokyBlack font-medium">$225</p>
            {/*cart product price*/}
          </div>

          <div className="flex flex-row justify-between items-end">
            <p className="text-xs text-gray-400 font-medium">
              Added by <span className="text-secondary capitalize">yatin</span> {/* user name*/}
            </p>

            <div className="text-sm flex bg-whiteColor rounded-sm shadow-sm ">
              <span className="px-2 flex justify-center items-center">
                <AiOutlineMinus className="text-secondary text-lg" />
              </span>
              <p className="px-2 text-smokyBlack">1</p> {/*no of items*/}
              <span className="px-2 flex justify-center items-center">
                <AiOutlinePlus className="text-secondary text-lg" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
