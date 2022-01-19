import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import sessionContext from "../../context/session/context";

// const CategoriesCard = ({categoryName,imgUrl,bgColor,}: {categoryName: string;imgUrl: string;bgColor: string;
// })

const CategoriesCard = (props: any) => {
  const { setAllItems } = useContext(sessionContext);
  const router = useRouter();
  // const { setCategoryItems, getStagedItems } = useContext(sessionContext);

  console.log(props.categoryName);
  const { categoryName, imageUrl, bgColor, categoryId } = props;

  return (
    <>
      <div
        id="cardContaner"
        // className={`flex flex-col justify-between p-4 rounded-2xl ${bgColor}`}
        style={{ backgroundColor: `${bgColor}` }}
        className={`flex flex-col justify-between p-4 rounded-2xl `}
        onClick={async () => {
          // localStorage.setItem("categoryName", categoryName);
          localStorage.setItem("categoryName", categoryName);

          // console.log(localStorage.getItem("categoryName"));
          const eateryId = localStorage.getItem("eateryId");
          // console.log(sessionId);
          // await setCategoryItems(categoryName);
          // await getStagedItems(sessionId);
          // console.log(categoryName);

          router.push({
            // pathname: `/app/menu/${categoryName}`,
            pathname: `/app/menu/${categoryName}`,
            query: { bgColor, imageUrl, categoryId },

            // query: { eateryId, bgColor, imgUrl },
          });
        }}
      >
        <h2 id="cardHeading" className="text-base font-bold">
          {categoryName}
        </h2>
        <div className="flex justify-center items-center p-2">
          {/* <Image src={imageUrl} /> */}
          <img src={imageUrl} className="w-[50px]  h-[50px]" />
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
