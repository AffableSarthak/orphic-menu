// import Box from "../../public/menuImages/Box.svg";

import { FiBox } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import sessionContext from '../../context/session/context'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import OrphicLoader from '../common/OrphicLoader'

const MenuCard = (props) => {
  const router = useRouter()
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
            className="flex items-center justify-center bg-whiteColor p-2 rounded-full"
          >
            <AiOutlinePlus className="text-smokyBlack" />
            <p>cust</p>
          </span>
        )
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <span className="flex items-center justify-center bg-whiteColor p-2 rounded-full ">
              {/* <AiOutlinePlus className="text-smokyBlack text-xl" /> */}
              <p className="bg-primary text-sm">ADDED</p>
            </span>
          )
        } else {
          // current Item is not present in the cart
          return (
            <span className="flex items-center justify-center bg-whiteColor p-2 rounded-full">
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
            className="flex items-center justify-center bg-whiteColor p-2 rounded-full"
          >
            <AiOutlinePlus />
          </span>
        )
      } else if (stagedItems.length > 0) {
        // Items present in cart
        if (stagedItems.find((ele) => ele.item.itemId === item.itemId)) {
          // If the current Item is present in Cart
          return (
            <span className="flex items-center justify-center bg-primary text-whiteColor p-2 rounded-full">
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
              className="flex items-center justify-center bg-whiteColor p-2 rounded-full"
            >
              <AiOutlinePlus />
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
        id="cardContainer"
        className="flex-four min-w-[224px] min-h-[324px] bg-dark rounded-[30px] my-1"
      >
        <div
          id="cardHeader"
          className="flex justify-between items-center px-4 min-h-[60px] rounded-t-[30px]"
        >
          {isLoading ? (
            <>
              <p className="bg-gray-500 h-5  w-10 px-6 animate-pulse rounded-md"></p>
              <span className="bg-gray-500 h-5 mx-1 w-1 px-6 animate-pulse rounded-md"></span>
            </>
          ) : (
            <>
              <p className="text-white">{item.itemId}</p>
              {cartItemInfo(stagedItems, item)}
            </>
          )}
        </div>
        <div id="imgContainer" className="flex-3 mt-2">
          {isLoading ? (
            <>
              <div className="h-[130px] mb-5 w-11/12 mx-auto animate-pulse rounded-md bg-gray-500"></div>
            </>
          ) : (
            <img
              src={item.bannerUrl}
              className="block w-full min-h-[150px] object-cover"
            />
          )}
        </div>

        <div className="min-h-[49px]">
          {isLoading ? (
            <div className="bg-gray-500 h-5 w-11/12 mx-auto px-6 animate-pulse rounded-md"></div>
          ) : (
            <h1 className="text-whiteColor px-4 text-base font-medium">
              {item.itemName}
            </h1>
          )}
        </div>

        <div className="flex justify-between items-end px-4 pb-4">
          {isLoading ? (
            <>
              <p className="flex-7 w-8/12 bg-gray-500 h-5  mx-auto px-6 animate-pulse rounded-md"></p>
              <span className="flex-2 bg-gray-500 h-5 mx-auto px-6 animate-pulse rounded-md"></span>
            </>
          ) : (
            <>
              <p className="text-whiteColor text-lg font-normal">
                ${item.price}
              </p>
              <span className="flex justify-center items-center bg-whiteColor rounded-full p-2 ">
                <FiBox className="text-3xl" />
              </span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default MenuCard
