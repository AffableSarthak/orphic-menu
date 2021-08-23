import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'
const BackButton = ({ path }) => {
  const router = useRouter()
  return (
    <>
      <span
        onClick={() => router.push({ pathname: path })}
        className="inline-block  bg-whiteColor p-2 rounded-xl shadow-lg"
      >
        <IoIosArrowBack className="text-smokyBlack text-2xl" />
      </span>
    </>
  )
}

export default BackButton
