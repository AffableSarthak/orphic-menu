import { FaStar } from "react-icons/fa";

const CategoriesCard = () => {
  return (
    <>
      <div id="categoriesCardContainer" className="px-6 rounded-t-lg">
        <div id="cardHeader">
          <div id="imgContainer">
            <img
              src="https://images.freekaamaal.com/post_images/1606817930.jpg"
              alt=""
              className="block w-full object-contain rounded-t-3xl"
            />
            {/* product image*/}
          </div>
        </div>

        <div id="cardFooter" className="flex flex-col bg-whiteColor shadow-lg px-4 py-4">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-medium">Chillox Burger</h2> {/* product name */}
            <p className="flex flex-rowitems-center gap-1 text-gray-400">
              <span className="flex justify-center items-center">
                <FaStar className="text-secondary" />
              </span>
              4.2 {/* product rating*/}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-sm text-gray-400">Burgersfast food</h2> {/* product type*/}
            <p className="text-sm text-gray-400">10 min</p> {/* product ready time*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
