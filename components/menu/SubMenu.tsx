import React, { useEffect } from "react";
import { useState } from "react";
import DisclosureCard from "./DisclosureCard";
import MenuCard from "./MenuCard";
import PopularCard from "./PopularCard";

const SubMenu = (props) => {
  const [subState, setSubState] = useState([]);
  useEffect(() => {
    // console.log(props);
    // Accepts the array and key
    const groupBy = (array, key) => {
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
  }, [props.items]);

  const getSubCategoryData = (array) => {
    {
      return array.map((item, index) => (
        // <MenuCard
        //   key={index}
        //   item={item}
        //   stagedItems={props.stagedItems}
        //   bgColor={props.bgColor}
        //   imgUrl={props.imgUrl}
        // />

        <DisclosureCard
          item={item}
          stagedItems={props.stagedItems}
          bgColor={props.bgColor}
          imgUrl={props.imgUrl}
          key={index}
        />
        // <PopularCard key={index} item={item} />
      ));
    }
  };

  return (
    <>
      {subState.map((ele, index) => (
        <>
          <div className="px-4" key={index}>
            <h2 className="text-md font-semibold px-4">{ele[0]}</h2>
          </div>
          <div className={`flex flex-col overflow-x-auto px-2 items-center`}>
            {getSubCategoryData(ele[1])}
          </div>
        </>
      ))}
    </>
  );
};

export default SubMenu;
