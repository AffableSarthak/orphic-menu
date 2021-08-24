import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { CgShoppingBag } from 'react-icons/cg'
import BackButton from '../common/BackButton'
import Button from '../common/Button'
import CartButton from '../common/CartButton'
import sessionContext from '../../context/session/context'
import router, { useRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ProductCustomization = () => {
  const router = useRouter()
  const { miniGC } = useContext(sessionContext)
  const [itemName, setItemName] = useState('')
  const [initialValues, setInitialValues] = useState({})

  const makeFormiKInitialValues = async () => {
    let tempObj = {}
    await miniGC.map((mgc) => {
      if (mgc.type === 'one') {
        tempObj[`${mgc.name}`.split(' ').join('_')] = ''
      } else {
        tempObj[`${mgc.name}`.split(' ').join('_')] = ['']
      }
    })
    setInitialValues(tempObj)
  }

  useEffect(() => {
    if (miniGC.length === 0) {
      const rId = localStorage.getItem('rId')
      router.push(`/app/categories/${rId}`)
    } else {
      const name = localStorage.getItem('currentItemName')
      setItemName(name)
      makeFormiKInitialValues()
    }
  }, [])
  console.log(miniGC)
  console.log(initialValues)

  return (
    <>
      <section id="prodCustSection" className="min-w-full px-4">
        <div
          id="prodCustHeader"
          className="flex flex-row justify-between items-center mt-8"
        >
          <BackButton />

          <CartButton />
        </div>

        <h1 className="text-sm font-semibold text-smokyBlack mt-8">
          {itemName}
        </h1>

        <Formik
          initialValues={initialValues}
          // validationSchema={yup.object({
          //   username: yup
          //     .string()
          //     .required('Username is Required!')
          //     .min(3, 'Atleast enter two characters')
          //     .max(15),
          // })}
          onSubmit={async (values, formikHelpers) => {}}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form className="block px-4">
              {miniGC.map((mgc) => {
                if (mgc.type === 'one') {
                  return (
                    <>
                      <div className="m-2 p-2">
                        <div
                          id="my-radio-group"
                          className="flex justify-between items-center"
                        >
                          <h2 className="text-sm text-smokyBlack font-semibold">
                            {mgc.name}
                          </h2>
                          <p className="text-xs text-smokyBlack font-semibold bg-primary uppercase p-1 rounded-md">
                            required
                          </p>
                        </div>
                        <div
                          role="group"
                          aria-labelledby="my-radio-group"
                          className="mt-3"
                        >
                          {mgc.values.map((value, index) => (
                            <label className="text-sm text-gray-600">
                              <Field
                                type="radio"
                                name={mgc.name.split(' ').join('_')}
                                value={`${value.name} + ₹${value.price}`}
                                className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                              />
                              {value.name}+ ₹${value.price}
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <>
                      <div className="m-2 p-2">
                        <div
                          id="checkbox-group"
                          className="flex justify-between items-center"
                        >
                          <h2 className="text-sm text-smokyBlack font-semibold">
                            {mgc.name}
                          </h2>
                          <p className="text-xs text-smokyBlack font-semibold bg-whiteColor uppercase p-1 rounded-md">
                            Optional
                          </p>
                        </div>
                        <div
                          role="group"
                          aria-labelledby="checkbox-group"
                          className="mt-3"
                        >
                          {mgc.values.map((value, index) => (
                            <label className="text-sm text-gray-600">
                              <Field
                                type="checkbox"
                                name={mgc.name.split(' ').join('_')}
                                value={`${value.name} + ₹${value.price}`}
                                className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                              />
                              {value.name}+ ₹${value.price}
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )
                }
              })}

              {/* Button */}
              <div
                id="totalBill"
                className="flex flex-row justify-between gap-10 mt-8"
              >
                <Button
                  name="Add to cart"
                  type="submit"
                  disabled={isSubmitting || isValidating}
                />
                <div>
                  <p className="text-smokyBlack text-sm">Item Total</p>
                  <p className="text-dark font-bold text-xl">$13.50</p>
                </div>
              </div>
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      </section>
    </>
  )
}

export default ProductCustomization

{
  /* <div id="sizeSelection" className="mt-6">
<div
 
  className="flex justify-between items-center"
>
  <h2 className="text-sm text-smokyBlack font-semibold">
    Choose Size
  </h2>
  <p className="text-xs text-smokyBlack font-semibold bg-primary uppercase p-1 rounded-md">
    required
  </p>
</div>

<div id="selectSize" className="mt-4 flex flex-col gap-2 divide-y-2">
  <div
    id="sizeInfo"
    className="flex flex-row justify-between items-center"
  >
    <div id="sizeInputContainer">
      <input
        type="radio"
        name="size"
        id=""
        className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
      />
      <label htmlFor="name" className="text-sm text-gray-600">
        Small - 6"
      </label>
    </div>

    <p className="text-sm text-gray-600">$8</p>
  </div>

  <div
    id="sizeInfo"
    className="flex flex-row justify-between items-center"
  >
    <div id="sizeInputContainer">
      <input
        type="radio"
        name="size"
        id=""
        className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
      />
      <label htmlFor="name" className="text-sm text-gray-600">
        Medium - 8"
      </label>
    </div>

    <p className="text-sm text-gray-600">$12</p>
  </div>

  <div
    id="sizeInfo"
    className="flex flex-row justify-between items-center"
  >
    <div id="sizeInputContainer">
      <input
        type="radio"
        name="size"
        id=""
        className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
      />
      <label htmlFor="name" className="text-sm text-gray-600">
        Large - 14"
      </label>
    </div>

    <p className="text-sm text-gray-600">$16</p>
  </div>
</div>
</div> */
}
