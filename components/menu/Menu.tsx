import { IoIosArrowBack } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import MenuCard from "./MenuCard";
import PopularCard from "./PopularCard";

const Welcome = () => {
  return (
    <>
      <section className="relative min-w-full min-h-screen">
        <div
          id="menuHeaderConatiner"
          className="flex flex-row justify-between items-center min-w-full h-40 px-4 bg-menu bg-cover bg-no-repeat object-center text-white"
        >
          <div id="menuHeaderBack" className="flex flex-row items-center">
            <a className="inline-block bg-whiteColor p-2  rounded-xl">
              <IoIosArrowBack className="text-smokyBlack text-2xl" />
            </a>
            <h3 className="ml-2 font-bold">Hunger Strike</h3>
          </div>

          <div
            id="addCartBtn"
            className="flex flex-row item-center text-xl py-3 px-4 rounded-xl bg-whiteColor text-smokyBlack"
          >
            <span className="flex justify-center items-center">
              <CgShoppingBag className="mr-4 text-center" />
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
            <span className="font-bold text-smokyBlack"> Cheese Burger </span> {/*cust.name/desc.*/}
            <span className="inline-block ml-4">
              <BsArrowRight />
            </span>
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-lg font-semibold px-4">Recommend</h2>
          <div className="flex flex-row items-center gap-4 overflow-x-auto     px-4">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-semibold px-4">Popular Now</h2>

          <PopularCard />
        </div>
      </section>
    </>
  );
};

export default Welcome;
