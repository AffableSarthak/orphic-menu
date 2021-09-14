import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusIcon } from "@heroicons/react/solid";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FiBox } from "react-icons/fi";
import MenuCard from "./MenuCard";
import PopularCard from "./PopularCard";
import SubMenu from "./SubMenu";
import Veg from "../../public/label/Veg.svg";
import NonVeg from "../../public/label/Non-Veg.svg";

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

  const labelValue = (label) => {
    switch (label) {
      case "V":
        return <Image src={Veg} />;
      case "NV":
        return <Image src={NonVeg} />;
      case "VNV":
        return (
          <>
            <div>
              <span className="mr-2">
                <Image src={Veg} />
              </span>
              <span>
                <Image src={NonVeg} />
              </span>
            </div>
          </>
        );
      default:
        return <Image src={Veg} />;
    }
  };

  return (
    <div className="w-full px-2">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <div
                className={`flex flex-row justify-between w-full py-2 px-2 min-h-[120px] text-md font-medium text-left bg-gradient-to-r from-gradientColor ${
                  item.subCategory ? "rounded-t-2xl" : "rounded-t-2xl"
                } `}
              >
                <div className="flex flex-col flex-eight">
                  <div className="flex ml-2 mt-1 text-dark text-base font-bold">
                    <h4>
                      {/* <span className="pr-2">{labelValue(item.label)}</span> */}
                      {item.itemName}
                    </h4>
                  </div>
                  {/* <div>
                    <span className="flex ml-2">{labelValue(item.label)}</span>
                  </div> */}

                  {item.desc && item.desc.length > 0 && (
                    <div className="flex ml-2 mt-1  text-dark text-sm tracking-tighter font-normal font-description max-h-[60px] overflow-y-auto">
                      <h3>{item.desc}</h3>
                    </div>
                  )}
                  <div className="flex ml-2 mt-4 text-base font-black text-dark">
                    <h3>
                      ₹{item.price}
                      {/* ({item.itemId}){" "} */}
                    </h3>
                  </div>
                  {/* {item.bannerUrl && (
                    <div>
                      <Disclosure.Button
                        className=" text-primary text-sm font-normal tracking-wide rounded-tr-2xl 
                      bg-dark px-5 py-2 cursor-pointer"
                      >
                        VIEW
                      </Disclosure.Button>
                    </div>
                  )} */}
                </div>
                <div className="flex justify-between items-end flex-col">
                  <div>{labelValue(item.label)}</div>

                  {/* <div>
                    <button className="bg-button py-2 px-4 text-sm tracking-wide rounded-tl-2xl ">
                      <div className="flex">
                        <div>
                          <PlusIcon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-white font-medium tracking-wides">
                          ADD
                        </div>
                      </div>
                    </button>
                  </div> */}
                  {item.bannerUrl && (
                    <div>
                      <Disclosure.Button
                        //   className=" text-white text-sm font-normal tracking-wide rounded-tl-2xl rounded-br-2xl
                        // bg-button px-5 py-2 cursor-pointer"
                        className="bg-button  text-white text-sm font-medium tracking-widest py-1 px-4 border-b-4 border-yellow-700 rounded"
                      >
                        VIEW
                      </Disclosure.Button>
                    </div>
                  )}
                </div>
              </div>
              <Disclosure.Panel
                className={`px-4 pt-4 pb-2 text-sm text-gray-500 bg-gradient-to-r from-gradientColor  rounded-b-2xl`}
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

// className={`${
//   open
//     ? `transform rotate-180 ${bgColor} text-dark`
//     : ""
// } w-7 h-7 text-dark bg-gray-100 p-1 mr-2 mt-1 rounded-2xl text-center`}

{
  /* <div>
                    <PlusIcon
                      className={`${
                        open ? `transform rotate-180 ${bgColor} text-dark` : ""
                      } w-7 h-7 text-dark bg-gray-100 p-1 mr-2 mt-1 rounded-2xl text-center`}
                    />
                  </div> */
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
