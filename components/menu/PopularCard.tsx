import Image from "next/image";
import { FiBox } from "react-icons/fi";
import popularDish from "../../public/beverages.jpg";
const PopularCard = ({ item }: { item: Iitem }) => {
  return (
    <>
      <div className="px-4">
        <div
          id="popularCardContainer"
          className="flex flex-row justify-center h-[70px] mt-4 bg-dark rounded-xl"
        >
          {/* <div
            id="popCardImageContainer"
            className="w-[100px] flex-three border"
          > */}
          <Image
            // src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
            src={popularDish}
            className="block object-cover rounded-l-xl"
          />
          {/* </div> */}

          <div id="popCardText" className="ml-2 flex-six">
            <h2 className="text-white mt-2 text-md font-medium w-5/6">
              {item.itemName}
            </h2>
            <p className="flex flex-row justify-between items-end ">
              <span className="text-white text-sm font-medium">
                ₹ {item.price}
              </span>
              {/* <span className="p-3 rounded-full bg-white mr-2">
                <FiBox className="text-dark text-2xl" />
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
