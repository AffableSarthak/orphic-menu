import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import sessionContext from '../../context/session/context'

const CategoriesCard = ({ categoryName, imgUrl }) => {
  const router = useRouter()
  const { setCategoryItems } = useContext(sessionContext)
  return (
    <>
      <div
        id="cardContaner"
        className="flex-four p-4 rounded-2xl bg-categoriesCardsColor"
        onClick={() => {
          setCategoryItems(categoryName)
          router.push({ pathname: '/app/menu' })
        }}
      >
        <h2 id="cardHeading" className="text-base font-bold">
          {categoryName}
        </h2>
        <div className="text-center">
          {/* <Image src={imgUrl} /> */}
          <img
            className="text-center"
            src={imgUrl}
            height="80px"
            width="80px"
          />
        </div>
      </div>
    </>
  )
}

export default CategoriesCard
