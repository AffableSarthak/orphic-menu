import { IoIosArrowBack } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import MenuCard from "./MenuCard";
const Welcome = () => {
  return (
    <>
      <section className="relative min-w-full min-h-screen">
        <div
          id="menu_header_conatiner"
          className="flex flex-row justify-between items-center min-w-full h-40 px-4 bg-gray-800 bg-cover bg-no-repeat object-center text-white"
        >
          <div id="menu_header_back" className="flex flex-row items-center">
            <a className="inline-block bg-whiteColor p-2  rounded-md">
              <IoIosArrowBack className="text-smokyBlack" />
            </a>
            <h3 className="ml-2 font-bold">Hunger Strike</h3>
          </div>

          <div className="flex flex-row item-center py-2 px-4 rounded-md bg-whiteColor text-smokyBlack">
            <span className="flex justify-center items-center">
              <CgShoppingBag className="inline-block  mr-4 text-center" />
            </span>

            <span>0</span>
          </div>
        </div>

        <div
          id="addNotify"
          className="absolute top-[140px] left-[15px] w-11/12 mx-auto bg-whiteColor p-4 rounded-lg shadow-xl text-center"
        >
          <p>
            <span className="text-secondary">Bhargav</span> added{" "}
            <span className="font-bold text-smokyBlack"> Cheese Burger </span>
            <span className="inline-block ml-4">
              <BsArrowRight />
            </span>
          </p>
        </div>

        <div id="menuScroll" className="mt-12 px-4">
          <h1 className="font-medium px-2 py-4">Menu</h1>
          <div className="flex flex-row gap-3 overflow-y-auto">
            <a className="text-sm bg-primary border shadow text-smokyBlack px-2 py-1 rounded-xl">Populer</a>
            <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Burger</a>
            <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Fries</a>
            <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
            <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
            <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
            <a className="text-sm bg-whiteColor border-2 shadow   text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
          </div>
        </div>

        <div className="flex flex-row gap-4 overflow-y-auto px-4">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </section>
    </>
  );
};

export default Welcome;
