import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgShoppingBag } from "react-icons/cg";
import taco from "../../public/categoriesImages/taco.png";
import Image from "next/image";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <section>
      <div id="categoriesHeader" className="flex justify-between items-center px-4 mt-8">
        <div id="locationInput" className="flex flex-row items-center">
          <span className="flex flex-row justify-center items-center">
            <HiOutlineLocationMarker className="text-secondary" />
          </span>
          <select name="select-location" className="font-medium border-none focus:outline-none focus:ring-0 ">
            <option value="" className="font-thin bg-whiteColor" selected disabled>
              select location
            </option>
            <option className="font-thin bg-whiteColor" value="delhi">
              Delhi
            </option>
            <option className="font-thin bg-whiteColor " value="mumbai">
              Mumbai
            </option>
            <option className="font-thin bg-whiteColor" value="heydrabad">
              Heydrabad
            </option>
          </select>
        </div>
        <div
          id="addCartBtn"
          className="flex flex-row item-center py-2 px-4 rounded-md bg-whiteColor text-smokyBlack shadow-lg "
        >
          <span className="flex justify-center items-center">
            <CgShoppingBag className="inline-block mr-4 text-center" />
          </span>
          <span>0</span> {/* no of items in cart*/}
        </div>
      </div>

      <div id="categoriesHeading" className="mt-6">
        <h1 className="font-extrabold text-2xl w-[200px] mx-auto">
          Your favorite dishes in <span className="text-primary">3D</span>
          <Image src={taco} width={30} height={30} className="ml-9" />
        </h1>
      </div>

      {/* {search input} */}

      <div id="menuScroll" className="mt-6 px-4">
        <h1 className="font-medium px-2 py-4">Categories</h1>
        <div className="flex flex-row gap-3 overflow-y-auto">
          <a className="text-sm bg-primary border shadow text-smokyBlack px-2 py-1 rounded-xl">Burger</a>
          <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Pizza</a>
          <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Salad</a>
          <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
          <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
          <a className="text-sm bg-whiteColor border-2 shadow  text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
          <a className="text-sm bg-whiteColor border-2 shadow   text-smokyBlack px-2 py-1 rounded-xl">Dummy</a>
        </div>
      </div>

      <div>
        <h1 className="px-6 py-4">Populer</h1>
        <div className="flex flex-col gap-[100px]">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
    </section>
  );
};

export default Categories;
