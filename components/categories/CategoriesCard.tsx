import { FaStar } from "react-icons/fa";

const CategoriesCard = () => {
  return (
    <>
      <div id="categoriesCardContainer" className="w-[365px] mx-auto h-[219PX] px-4 rounded-t-lg">
        <div id="cardHeader">
          <div id="imgContainer">
            <img
              src="https://images.freekaamaal.com/post_images/1606817930.jpg"
              alt=""
              className="block w-full rounded-t-3xl"
            />
          </div>
        </div>

        <div id="cardFooter" className="flex flex-col bg-whiteColor shadow-lg px-4 py-4">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-medium">Chillox Burger</h2>
            <p className="flex flex-rowitems-center gap-1">
              <span className="flex justify-center items-center">
                <FaStar className="text-secondary" />
              </span>
              4.2
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-sm text-gray-600">Burgersfast food</h2>
            <p className="text-sm text-gray-600">10 min</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
