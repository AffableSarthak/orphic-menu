// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import burgerGif from '../../public/menuImages/burger.gif'
import Image from 'next/image'
import sessionContext from '../../context/session/context'
import { useContext } from 'react'
const MenuCard = (props) => {
  const { setStagedItem } = useContext(sessionContext)
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
            <span className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2">
              {/* <AiOutlinePlus className="text-smokyBlack text-xl" /> */}
              <p>ADDED</p>
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
              className=" absolute right-5 top-5 flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2"
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
      <div
        id="cardConatiner"
        className=" flex-four bg-dark rounded-[30px] my-1"
      >
        <div
          id="cardImgContainer"
          className="flex justify-center relative h-[188px]"
        >
          <Image
            src={burgerGif}
            className="block  object-cover rounded-3xl border-2 border-pink-600"
          />{' '}
          {/*menu card product image*/}
          {cartItemInfo(stagedItems, item)}
        </div>

        <div id="cardtext">
          <h2 className="text-whiteColor font-bold px-4 w-[200px]">
            {item.itemName}
          </h2>
          {/* product name/desc.*/}
        </div>

        <div
          id="cardFooter"
          className="px-4 flex flex-row justify-between items-center pb-4"
        >
          <h2 className="text-whiteColor font-bold">{item.price}</h2>{' '}
          {/* product price.*/}
          <span className="flex flex-row justify-center items-center bg-whiteColor rounded-full px-2 py-2">
            <FiBox className="text-3xl" />
          </span>
        </div>
      </div>
    </>
  )
}

export default MenuCard
