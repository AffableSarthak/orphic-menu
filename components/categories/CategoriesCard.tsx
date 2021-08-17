import Image from "next/image";

const CategoriesCard = ({ categoryName, imgUrl }) => {
  return (
    <>
      <div id="cardContaner" className="flex-four p-4 rounded-2xl bg-categoriesCardsColor">
        <h2 id="cardHeading" className="text-base font-bold">
          {categoryName}
        </h2>
        <div className="text-center">
          <Image src={imgUrl} />
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
