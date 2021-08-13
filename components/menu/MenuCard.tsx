// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

const MenuCard = () => {
  return (
    <>
      <div id="cardConatiner" className="bg-smokyBlack w-[223px] mx-auto h-[310px] rounded-3xl my-8">
        <div id="cardImgContainer" className=" relative h-[188px]">
          <img
            src="https://images.freekaamaal.com/post_images/1606817930.jpg"
            className="block w-full h-[150px] object-cover rounded-3xl"
          />{" "}
          {/*menu card product image*/}
          <span className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-1 py-1">
            <AiOutlinePlus className="text-smokyBlack" />
          </span>
        </div>

        <div id="cardtext">
          <h2 className="text-whiteColor font-bold p-4 w-[200px]">Big Cheese burger with wedges</h2>
          {/* product name/desc.*/}
        </div>

        <div id="cardFooter" className="px-4 flex flex-row justify-between">
          <h2 className="text-whiteColor font-bold">$229</h2> {/* product price.*/}
          <span className="flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2">
            <FiBox />
          </span>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
