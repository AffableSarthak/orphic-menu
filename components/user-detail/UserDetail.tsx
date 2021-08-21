import Image from 'next/image'
import pizzaMatte from '../../public/usernameImages/pizzaMatte.png'
import burgerSmall from '../../public/usernameImages/burgerSmall.png'
import friesIsometric from '../../public/usernameImages/friesIsometric.png'
import hotDog from '../../public/usernameImages/hotDog.png'
import ketchupMayo from '../../public/usernameImages/ketchupMayo.png'
import orphicLogo from '../../public/usernameImages/orphicLogo.png'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import sessionContext from '../../context/session/context'
import { useContext } from 'react'
import { useRouter } from 'next/router'
// import { useContext } from "react";
// import eatriesContext from "../../context/eateries/eatriesContext";
const UserDetail = (props) => {
  const { isLoading, setUsername, getCategories, populateGc } =
    useContext(sessionContext)
  // console.log(props)
  const router = useRouter()
  let rId = props.rId
  if (typeof window !== 'undefined') {
    localStorage.setItem('rId', rId)
  }

  return (
    <>
      {/* {allData && JSON.stringify(allData)} */}
      <div id="imagesConatiner">
        <div id="pizzaContainer" className="text-center mt-8 ">
          <Image src={pizzaMatte} width={60} height={60} />
        </div>

        <div id="foodLayer2" className="flex flex-row justify-around">
          <Image src={hotDog} width={80} height={80} />
          <Image src={friesIsometric} width={60} height={60} />
        </div>

        <div
          id="foodLayer3"
          className="flex flex-row justify-between text-center"
        >
          <Image src={burgerSmall} width={60} height={60} />
          <Image src={orphicLogo} width={100} height={100} />
          <Image src={ketchupMayo} width={60} height={60} />
        </div>
      </div>

      <div id="userNameHeadings" className="mt-8">
        <h2 className="text-4xl font-bold mb-4 text-center">orphic.</h2>
        <p className="text-gray-500 text-sm text-center font-medium">
          Your favorite meals in 3D
        </p>
      </div>

      <div className="mt-5">
        <Formik
          initialValues={{ username: '' }}
          validationSchema={yup.object({
            username: yup.string().required().min(2).max(15),
          })}
          onSubmit={(values, formikHelpers) => {
            setUsername(values.username)
            rId = localStorage.getItem('rId')
            router.push({
              pathname: `/app/categories/${rId}`,
            })
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form className="block px-4">
              <Field
                name="username"
                placeholder="Enter your Name"
                className="bg-whiteColor w-full px-8 py-4 rounded-2xl mb-5"
              />
              <ErrorMessage name="username" className="" />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || isValidating}
                  className="flex flex-row justify-center items-center px-8 py-4 rounded-2xl bg-primary disabled:bg-gray-400 disabled:text-white"
                >
                  <span>Continue</span>
                  <span className="flex justify-center items-center {${isSubmitting? disabled: animate-spin}}">
                    <BsArrowRight />
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default UserDetail
