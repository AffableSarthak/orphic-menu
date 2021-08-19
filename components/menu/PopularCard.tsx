import Image from "next/image";
import { FiBox } from "react-icons/fi";
import popularDish from "../../public/menuImages/popularDish.jpg";
const PopularCard = () => {
  return (
    <>
      <div className="px-4">
        <div id="popularCardContainer" className="flex justify-center h-[116px] mt-4 bg-dark rounded-2xl">
          <div id="popCardImageContainer" className="w-[96px] flex-three border ">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
              // src={popularDish}
              className="block w-full h-full object-cover rounded-l-2xl"
            />
          </div>

          <div id="popCardText" className="ml-2 flex-six">
            <h2 className="text-white mt-2 text-base font-medium w-5/6">Japanese Pizza with Extra Sauce</h2>
            <p className="flex flex-row justify-between items-end ">
              <span className="text-white text-base font-medium">$223</span>
              <span className="p-3 rounded-full bg-white mr-2">
                <FiBox className="text-dark text-2xl" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
