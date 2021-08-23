import { IoIosArrowBack } from 'react-icons/io'
import { CgShoppingBag } from 'react-icons/cg'
import { BsArrowRight } from 'react-icons/bs'
import MenuCard from './MenuCard'
import PopularCard from './PopularCard'
import sessionContext from '../../context/session/context'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import BackButton from '../common/BackButton'
import CartButton from '../common/CartButton'

const Welcome = ({ categoryName }) => {
  const { items, username, categories, gcState, stagedItems } =
    useContext(sessionContext)
  // console.log(
  //   items.length,
  //   localStorage.getItem('username'),
  //   categories,
  //   gcState
  // )
  // console.log(stagedItems)
  const router = useRouter()

  useEffect(() => {
    const rId = localStorage.getItem('rId')
    if (items.length === 0) router.push(`/app/categories/${rId}`)
  }, [])

  return (
    <>
      <section className="relative min-w-full min-h-screen">
        <div
          id="menuHeaderConatiner"
          className="flex flex-row justify-between items-center min-w-full h-40 px-4 bg-menu bg-cover bg-no-repeat object-center text-white"
        >
          <div id="menuHeaderBack" className="flex flex-row items-center">
            <BackButton />
            <h3 className="ml-2 font-bold">{categoryName}</h3>
          </div>

          <CartButton />
        </div>

        <div
          id="addNotify"
          className="absolute top-[140px] left-[15px] w-11/12 mx-auto bg-whiteColor p-4 rounded-lg shadow-xl text-center"
        >
          <p>
            <span className="text-secondary">Bhargav</span> added{' '}
            <span className="font-bold text-smokyBlack"> Cheese Burger </span>{' '}
            <span className="inline-block ml-4">
              <BsArrowRight />
            </span>
          </p>
        </div>
        <div className="mt-14 p-4">
          <h2 className="text-lg font-semibold px-4">Recommend</h2>
        </div>

        <div className="flex flex-row items-center gap-4 overflow-x-auto px-4">
          {items.map((item, index) => (
            <MenuCard key={index} item={item} stagedItems={stagedItems} />
          ))}
        </div>

        {/* <div className="mt-5">
          <h2 className="text-lg font-semibold px-4">Popular Now</h2>

          <PopularCard />
        </div> */}
      </section>
    </>
  )
}

export default Welcome
