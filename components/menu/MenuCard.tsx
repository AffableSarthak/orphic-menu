// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import burgerGif from "../../public/menuImages/burger.gif";
import Image from "next/image";
const MenuCard = () => {
  return (
    <>
      <div id="cardConatiner" className=" flex-five bg-dark rounded-[30px] my-5">
        <div id="cardImgContainer" className="flex justify-center relative h-[188px]">
          <Image src={burgerGif} className="block  object-cover rounded-3xl border-2 border-pink-600" />{" "}
          {/*menu card product image*/}
          <span className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-1 py-1">
            <AiOutlinePlus className="text-smokyBlack text-xl" />
          </span>
        </div>

        <div id="cardtext">
          <h2 className="text-whiteColor font-bold px-4 w-[200px]">Big Cheese burger with wedges</h2>
          {/* product name/desc.*/}
        </div>

        <div id="cardFooter" className="px-4 flex flex-row justify-between items-center pb-4">
          <h2 className="text-whiteColor font-bold">$229</h2> {/* product price.*/}
          <span className="flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2">
            <FiBox className="text-3xl" />
          </span>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
