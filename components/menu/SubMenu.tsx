import React, { useEffect } from "react";
import { useState } from "react";
import DisclosureCard from "./DisclosureCard";

const SubMenu = (props: any) => {
  const [subState, setSubState] = useState([]);
  const [activeItems, setActiveItems] = useState<Iitem[]>([]);
  useEffect(() => {
    // console.log(props);
    // Accepts the array and key
    const groupBy = (array: any[], key: string) => {
      // Return the end result
      return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
      }, {}); // empty object is the initial value for result object
    };

    const itemsGroupedBySubCategory = groupBy(props.items, "subCategory");
    const tempSubCategory = Object.entries(itemsGroupedBySubCategory);
    setSubState(tempSubCategory as any);
    // console.log(tempSubCategory[0][1]);
    setActiveItems(tempSubCategory[0][1] as Iitem[]);
  }, [props.items]);

  const getSubCategoryData = (array: Iitem[]) => {
    {
      return array.map((item: Iitem, index) => (
        <DisclosureCard
          item={item}
          stagedItems={props.stagedItems}
          bgColor={props.bgColor}
          imgUrl={props.imgUrl}
          key={item.itemId}
        />
        // <PopularCard key={index} item={item} />
      ));
    }
  };

  const handleActiveItems = (array: Iitem[]) => {
    console.log({ array });
    setActiveItems(array);
  };

  return (
    <>
      <div className="flex flex-row overflow-x-auto px-4 mt-5">
        {subState.map((ele, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(typeof ele[0], ele[0]);
              handleActiveItems(ele[1]);
            }}
            className="flex-four mr-4 rounded-xl px-4 py-4 bg-gray-100 border border-gray-400 text-dark active:bg-primary active:text-dark focus:bg-primary focus:text-dark active:border-none "
          >
            {ele[0] === "undefined" ? "ALL" : ele[0]}
          </button>
        ))}
      </div>
      <div className={`flex flex-col overflow-x-auto px-2 mt-4 items-center`}>
        {getSubCategoryData(activeItems)}
      </div>
    </>
  );
};

export default SubMenu;

{
  /* {subState.map((ele, index) => (
        <>
          <div className="px-4" key={index}>
            <h2 className="text-md font-semibold px-4">{ele[0]}</h2>
          </div>
          <div className={`flex flex-col overflow-x-auto px-2 items-center`}>
            {getSubCategoryData(ele[1])}
          </div>
        </>
      ))} */
}
