// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import burgerGif from '../../public/menuImages/burger.gif'
import Image from 'next/image'
import sessionContext from '../../context/session/context'
import { useContext } from 'react'

const MenuCard = (props) => {
  const { setStagedItem, isLoading } = useContext(sessionContext)
  const { item, stagedItems } = props

  const cartItemInfo = (stagedItems, item) => {
    if (item.cust) {
      // Item has customization
      if (stagedItems.length === 0) {
        // No Item in Cart
        return (
          // push to cart with and add the item with other details to staged items => item, count, username, cust array
          <span
            onClick={() => {}}
            className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2"
          >
            <AiOutlinePlus className="text-smokyBlack text-xl" />
            <p>cust</p>
          </span>
        )
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <span className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2">
              {/* <AiOutlinePlus className="text-smokyBlack text-xl" /> */}
              <p className="text-primary text-sm">ADDED</p>
            </span>
          )
        } else {
          // current Item is not present in the cart
          return (
            <span className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2">
              <AiOutlinePlus className="text-smokyBlack text-xl" />
            </span>
          )
        }
      }
    } else {
      // No customization for the item
      if (stagedItems.length === 0) {
        // No Item in Cart
        return (
          // push to cart with and add the item with other details to staged items => item, count, username
          <span
            onClick={() => {
              console.log('Inside without cust item')

              setStagedItem(item, 'SET_WITHOUT_CUST')
            }}
            className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2"
          >
            <AiOutlinePlus className="text-smokyBlack text-xl" />
          </span>
        )
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <span className=" absolute right-5 top-5 flex flex-row justify-center items-center  rounded-full px-2 py-2 bg-primary text-white">
              {/* <AiOutlinePlus className="text-smokyBlack text-xl" /> */}
              Added
            </span>
          )
        } else {
          // current Item is not present in the cart
          return (
            // push to cart with and add the item with other details to staged items => item, count, username
            <span
              onClick={() => {
                setStagedItem(item, 'SET_WITHOUT_CUST')
              }}
              className="absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2"
            >
              <AiOutlinePlus className="text-smokyBlack text-xl" />
            </span>
          )
        }
      }
    }
  }
  return (
    <>
      {/* {console.log(item, 'img container')} */}
      <div
        id="cardConatiner"
        className=" flex-four bg-dark min-h-[315px] rounded-[30px] my-1"
      >
        <div
          id="cardImgContainer"
          className="flex justify-center relative h-[205px]"
        >
          {isLoading ? (
            <div className="bg-gray-200 h-12 w-12 animate-pulse p-4"></div>
          ) : (
            <img
              src={item.bannerUrl}
              className="block object-cover rounded-t-3xl mt-4"
            />
          )}
          {cartItemInfo(stagedItems, item)}
        </div>

        <div id="cardtext" className="h-14 flex justify-center items-center">
          {isLoading ? (
            <div className=" bg-gray-200 h-5 mx-1 animate-pulse rounded-md min-w-[224px]"></div>
          ) : (
            <h2 className="text-whiteColor font-bold px-4 min-w-[224px] ">
              {item.itemName}
            </h2>
          )}
        </div>

        <div
          id="cardFooter"
          className="px-4 flex flex-row justify-between items-center "
        >
          {isLoading ? (
            <div className=" bg-gray-200 h-5 mx-1 w-1 px-6 animate-pulse rounded-md"></div>
          ) : (
            <h2 className="text-whiteColor font-bold">{item.price}</h2>
          )}

          <span className="flex flex-row justify-center items-end bg-whiteColor rounded-full px-2 py-2">
            <FiBox className="text-3xl" />
          </span>
        </div>
      </div>
    </>
  )
}

export default MenuCard
