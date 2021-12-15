import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Veg from "../../public/label/Veg.svg";
import NonVeg from "../../public/label/Non-Veg.svg";
import ModalViewer from "../modal/ModalViewer";

const Model = dynamic(() => import("../glbLoad/Model"), {
  ssr: false,
});

export default function DisclosureCard(props: {
  // item: Iitem;
  item: Iitem1;
  stagedItems: IstagedItem[];
  bgColor: string;
  imgUrl: string;
}) {
  const { item, stagedItems, bgColor, imgUrl } = props;

  // const labelValue = (label: string) => {
  //   switch (label) {
  //     case "V":
  //       return <Image src={Veg} />;
  //     case "NV":
  //       return <Image src={NonVeg} />;
  //     case "VNV":
  //       return (
  //         <>
  //           <div>
  //             <span className="mr-2">
  //               <Image src={Veg} />
  //             </span>
  //             <span>
  //               <Image src={NonVeg} />
  //             </span>
  //           </div>
  //         </>
  //       );
  //     default:
  //       return <Image src={Veg} />;
  //   }
  // };

  const labelValue = (label: Boolean) => {
    switch (label) {
      case false:
        return <Image src={Veg} />;
      case true:
        return <Image src={NonVeg} />;
      // case "VNV":
      //   return (
      //     <>
      //       <div>
      //         <span className="mr-2">
      //           <Image src={Veg} />
      //         </span>
      //         <span>
      //           <Image src={NonVeg} />
      //         </span>
      //       </div>
      //     </>
      //   );
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
                className={`flex flex-row justify-between w-full py-2 px-2 min-h-[120px] text-md font-medium text-left bg-gradient-to-r from-gradientColor rounded-2xl`}
              >
                <div className="flex flex-col flex-eight">
                  <div className="flex ml-2 mt-1 text-dark text-base font-bold">
                    <h4>
                      {/* <span className="pr-2">{labelValue(item.label)}</span> */}
                      {/* {item.itemName} */}
                      {item.name}
                    </h4>
                  </div>
                  {/* <div>
                    <span className="flex ml-2">{labelValue(item.label)}</span>
                  </div> */}

                  {/* {item.desc && item.desc.length > 0 && ( */}
                    {item.description && item.description.length > 0 && (
                    <div className="flex ml-2 mt-1  text-dark text-sm tracking-tighter font-normal font-description max-h-[60px] overflow-y-auto">
                      <h3>
                        {/* {item.desc} */}
                        {item.description}
                        </h3>
                    </div>
                  )}
                  <div className="flex ml-2 mt-4 text-base font-black text-dark">
                    <h3>
                      {/* ₹{item.price} */}
                      ₹{item.rate}
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
                  {/* <div>{labelValue(item.label as string)}</div> */}
                  <div>{labelValue(item.isNonVeg as Boolean)}</div>





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
                  {/* {item.bannerUrl && ( */}
                    {/* {item.modelUrl && ( */}
                    {true && (

                    // <div>
                    //   <Disclosure.Button
                    //     //   className=" text-white text-sm font-normal tracking-wide rounded-tl-2xl rounded-br-2xl
                    //     // bg-button px-5 py-2 cursor-pointer"
                    //     className="bg-button  text-white text-sm font-medium tracking-widest py-1 px-4 border-b-4 border-yellow-700 rounded"
                    //   >
                    //     VIEW
                    //   </Disclosure.Button>
                    // </div>
                    <ModalViewer
                      glbName={`${
                        //@ts-ignore
                        item.id.split("-")[1].toString() * 1
                      }_processed`}
                      item={item}
                    />
                  )}
                </div>
              </div>
              <Disclosure.Panel
                className={`px-4 pt-4 pb-2 text-sm text-gray-500 bg-gradient-to-r from-gradientColor  rounded-b-2xl`}
              >
                <Model
                  glbName={`${
                    //@ts-ignore
                    item.id.split("-")[1].toString() * 1
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
