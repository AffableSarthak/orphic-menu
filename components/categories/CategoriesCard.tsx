import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import sessionContext from "../../context/session/context";

const CategoriesCard = ({ categoryName, imgUrl, bgColor, custType }) => {
  const router = useRouter();
  const { setCategoryItems, getStagedItems } = useContext(sessionContext);

  return (
    <>
      <div
        id="cardContaner"
        className={`flex flex-col justify-between p-4 rounded-2xl ${bgColor}`}
        onClick={async () => {
          await localStorage.setItem("categoryName", categoryName);
          // console.log(localStorage.getItem("categoryName"));
          const eateryId = await localStorage.getItem("eateryId");
          // console.log(sessionId);
          // await setCategoryItems(categoryName);
          // await getStagedItems(sessionId);
          // console.log(categoryName);
          router.push({
            pathname: `/app/menu/${categoryName}`,
            query: { eateryId, bgColor, imgUrl, custType },
          });
        }}
      >
        <h2 id="cardHeading" className="text-base font-bold">
          {categoryName}
        </h2>
        <div className="flex justify-center items-center p-2">
          {/* <Image src={imgUrl} /> */}
          <img src={imgUrl} className="w-[50px]  h-[50px]" />
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
