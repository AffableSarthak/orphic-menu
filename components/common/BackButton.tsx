import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const BackButton = ({ path }) => {
  const router = useRouter()
  const [pathValue, setPathValue] = useState('')
  useEffect(() => {
    const rId = localStorage.getItem('rId')
    setPathValue(`/app/categories/${rId}`)
  }, [])
  return (
    <>
      <span
        onClick={() => router.push({ pathname: pathValue })}
        className="inline-block  bg-whiteColor p-2 rounded-xl shadow-lg"
      >
        <IoIosArrowBack className="text-smokyBlack text-2xl" />
      </span>
    </>
  )
}

export default BackButton
