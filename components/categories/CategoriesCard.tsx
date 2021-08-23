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
        className="flex flex-col justify-between p-4 rounded-2xl bg-categoriesCardsColor"
        onClick={() => {
          setCategoryItems(categoryName)
          router.push({ pathname: `/app/menu/${categoryName}` })
        }}
      >
        <h2 id="cardHeading" className="text-base font-bold">
          {categoryName}
        </h2>
        <div className="flex justify-center items-center p-2">
          {/* <Image src={imgUrl} /> */}
          <img src={imgUrl} className="w-[102px]  h-[85px]" />
        </div>
      </div>
    </>
  )
}

export default CategoriesCard
