import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon } from "@heroicons/react/solid";

import dynamic from "next/dynamic";
import { FiBox } from "react-icons/fi";
import MenuCard from "./MenuCard";
import PopularCard from "./PopularCard";
import SubMenu from "./SubMenu";

const Model = dynamic(() => import("../glbLoad/Model"), {
  ssr: false,
});

export default function DisclosureCard(props: {
  item: Iitem;
  stagedItems: IstagedItem[];
  bgColor: string;
  imgUrl: string;
}) {
  const { item, stagedItems, bgColor, imgUrl } = props;
  return (
    <div className="w-full px-2">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <div
                className={`flex flex-row justify-between w-full py-2 px-2 text-md font-medium text-left bg-dark ${
                  item.subCategory ? "rounded-2xl" : "rounded-t-2xl"
                } `}
              >
                <div className="flex flex-col gap-2 flex-eight">
                  <div className="flex ml-2 text-white text-lg font-thin">
                    <h3>{item.itemName}</h3>
                  </div>
                  {item.desc && item.desc.length > 0 && (
                    <div className="flex ml-2 text-white text-sm font-thin">
                      <h3>{item.desc}</h3>
                    </div>
                  )}
                  <div className="flex ml-2 text-md  text-primary">
                    <h3>
                      ₹{item.price}{" "}
                      <span className="text-xs">({item.itemId})</span>
                    </h3>
                  </div>
                </div>
                <div className="flex justify-end flex-col gap-2 mr-1">
                  {/* <div className="flex">
                    <PlusIcon
                      className={`${
                        open ? `transform rotate-180 ${bgColor} text-dark` : ""
                      } w-7 h-7 text-dark bg-white m-2 rounded-2xl text-center`}
                    />
                  </div> */}
                  {item.bannerUrl && (
                    <Disclosure.Button className="flex rounded-full bg-white p-2 cursor-pointer">
                      <FiBox className="text-dark text-2xl" />
                    </Disclosure.Button>
                  )}
                </div>
              </div>
              <Disclosure.Panel
                className={`px-4 pt-4 pb-2 text-sm text-gray-500 bg-dark  rounded-b-2xl`}
              >
                <Model
                  glbName={`${
                    //@ts-ignore
                    item.itemId.split("-")[1].toString() * 1
                  }_processed`}
                  item={item}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

{
  /* <span> */
}
{
  /* <MenuCard
                    item={item}
                    stagedItems={stagedItems}
                    bgColor={bgColor}
                    imgUrl={imgUrl}
                  /> */
}
{
  /* <PopularCard
                    item={item}
                    stagedItems={stagedItems}
                    bgColor={bgColor}
                    imgUrl={imgUrl}
                  />
                </span> */
}
{
  /* <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                /> */
}

{
  /* <div className="flex flex-col gap-4">
                  <div>
                    <FiBox
                      className={`${
                        open
                          ? `text-3xl text-black ${bgColor} m-2 rounded-md`
                          : "text-3xl text-white m-2 rounded-md"
                      }`}
                    />
                  </div>
                  <div> */
}
{
  /* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg> */
}

{
  /* </div> */
}
{
  /* </div> */
}
