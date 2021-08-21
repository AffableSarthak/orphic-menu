import { HiOutlineLocationMarker } from 'react-icons/hi'
import { CgShoppingBag } from 'react-icons/cg'
import taco from '../../public/categoriesImages/taco.png'
import wavyPizza from '../../public/categoriesImages/wavyPizza.png'
import Image from 'next/image'
import CategoriesCard from './CategoriesCard'
import sessionContext from '../../context/session/context'
import { useContext } from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Categories = (props) => {
  const {
    isLoading,
    setUsername,
    getCategories,
    populateGc,
    categories,
    username,
  } = useContext(sessionContext)

  if (typeof window !== 'undefined') {
    localStorage.setItem('username', username)
  }
  return (
    <>
      <section id="categoriesSection">
        <div
          id="resturantHeader"
          className="flex justify-between items-center px-4 mt-8"
        >
          <div id="locationInput" className="flex flex-row items-center">
            <span className="flex flex-row justify-center items-center">
              <HiOutlineLocationMarker className="text-secondary" />
            </span>
            <select
              name="select-location"
              defaultValue="bangalore"
              className="font-medium border-none focus:outline-none focus:ring-0 "
            >
              {/* <option
                value=""
                className="font-thin bg-whiteColor"
                selected
                disabled
              >
                select location
              </option> */}
              <option
                className="font-thin bg-whiteColor"
                value="bangalore"
                defaultValue="bangalore"
              >
                Bangalore
              </option>
              <option className="font-thin bg-whiteColor" value="delhi">
                Delhi
              </option>
              <option className="font-thin bg-whiteColor " value="mumbai">
                Mumbai
              </option>
              <option className="font-thin bg-whiteColor" value="hydrabad">
                Heydrabad
              </option>
            </select>
          </div>
          <div
            id="addCartBtn"
            className="flex flex-row item-center text-xl py-3 px-4 rounded-xl bg-whiteColor text-smokyBlack shadow-lg "
          >
            <span className="flex justify-center items-center ">
              <CgShoppingBag className="mr-4 text-center" />
            </span>
            <span>0</span> {/* no of items in cart*/}
          </div>
        </div>

        <div id="resturantHeading" className="mt-6">
          <h1 className="font-black text-2xl w-[200px] mx-auto">
            Your favorite dishes in <span className="text-primary">3D</span>
            <Image src={taco} width={30} height={30} className="ml-9" />
          </h1>
        </div>

        {/* {search input} */}
        <div className="relative p-4">
          <input
            type="text"
            className="bg-whiteColor border-2 border-gray-300 rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary p-4 pl-10 w-full"
            placeholder="Search for a category"
          />
          <RiSearchLine className="absolute top-[35px] left-[29px] text-2xl text-gray-400" />
        </div>

        <div id="categoriesCards" className="mt-5 px-4">
          <h2
            id="categoriesCardsHeading"
            className="text-lg font-semibold mb-4"
          >
            Popular
          </h2>
          <div id="categoriesCardsContainer" className="grid grid-cols-2 gap-4">
            {props.sessionProps.categories.map((c, i) => (
              <CategoriesCard key={i} categoryName={c.name} imgUrl={c.src} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories
