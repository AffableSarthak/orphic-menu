import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";
import BackButton from "../common/BackButton";
import Button from "../common/Button";
import CartButton from "../common/CartButton";
import sessionContext from "../../context/session/context";
import router, { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ProductCustomization = () => {
  const router = useRouter();
  const { miniGC, setStagedItem, currentItem } = useContext(sessionContext);
  const [itemName, setItemName] = useState("");
  const [initialValues, setInitialValues] = useState({});

  const makeFormiKInitialValues = async () => {
    let tempObj = {};
    await miniGC.map((mgc) => {
      if (mgc.type === "one") {
        tempObj[`${mgc.name}`.split(" ").join("_")] = {};
      } else {
        tempObj[`${mgc.name}`.split(" ").join("_")] = [""];
      }
    });
    setInitialValues(tempObj);
  };

  useEffect(() => {
    if (miniGC.length === 0) {
      const rId = localStorage.getItem("rId");
      router.push(`/app/categories/${rId}`);
    } else {
      const name = localStorage.getItem("currentItemName");
      setItemName(name);
      makeFormiKInitialValues();
    }
  }, []);
  // console.log(miniGC);
  // console.log(initialValues);

  // const getValidationSchema = async () => {
  //   let schemaObj = {};
  //   await miniGC.map((mgc) => {
  //     if (mgc.type === "one") {
  //       schemaObj[`${mgc.name}`.split(" ").join("_")] = yup
  //         .string()
  //         .required(`A ${mgc.name} option is required`);
  //     }
  //   });
  //   console.log(schemaObj);
  //   return schemaObj;
  // };
  const newItemObj = (values) => {
    // console.log(Object.values(values), "from new item");
  };
  return (
    <>
      <section id="prodCustSection" className="min-w-full px-4 pb-4">
        <div
          id="prodCustHeader"
          className="flex flex-row justify-between items-center mt-8"
        >
          <BackButton />

          <CartButton />
        </div>

        {/* {console.log(miniGC, "from ProductCustomization")} */}
        <h1 className="text-sm font-semibold text-smokyBlack mt-8">
          {itemName}
        </h1>
        <Formik
          initialValues={initialValues}
          // validationSchema={yup.object(getValidationSchema())}
          onSubmit={async (values) => {
            newItemObj(values);
            const item = {
              ...currentItem,
              customization: values,
            };
            await setStagedItem(item, "SET_WITH_CUST");
            router.push({ pathname: "/app/cart" });
            // console.log({ values });
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form className="block mt-6">
              {miniGC.map((mgc, index) => {
                if (mgc.type === "one") {
                  return (
                    <>
                      <div key={index} className="my-2 py-2">
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
                          className="mt-3 divide-y-2"
                        >
                          {mgc.values.map((value, index) => (
                            <>
                              {/* {(console.log(value), "from values")} */}
                              <div className="flex flex-row justify-between py-2">
                                <div>
                                  <Field
                                    type="radio"
                                    name={mgc.name.split(" ").join("_")}
                                    value={`${value.name},${value.price}`}
                                    className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                                  />
                                  <label
                                    htmlFor={`radio${index}`}
                                    key={index}
                                    className="text-sm text-gray-600"
                                  >
                                    {value.name}
                                  </label>
                                </div>

                                <span>+₹{value.price}</span>
                              </div>
                            </>
                          ))}
                        </div>
                        <ErrorMessage
                          name={mgc.name.split(" ").join("_")}
                          component={"div"}
                          className="text-red-500 px-4"
                        />
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div key={index} className="my-2 py-2">
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
                          className="mt-3 divide-y-2"
                        >
                          {mgc.values.map((value, index) => (
                            <>
                              <div className="flex flex-row justify-between py-2">
                                <div>
                                  <Field
                                    id={`checkbox${index}`}
                                    type="checkbox"
                                    name={mgc.name.split(" ").join("_")}
                                    value={`${value.name},${value.price}`}
                                    className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                                  />
                                  <label
                                    htmlFor={`checkbox${index}`}
                                    key={index}
                                    className="text-sm text-gray-600"
                                  >
                                    {value.name}
                                  </label>
                                </div>
                                <span>+₹{value.price}</span>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                }
              })}

              {/* Button */}

              {/* <div id="totalBill" className="flex flex-row justify-between gap-10 mt-8">
                <Button name="Add to cart" />
                <div className="">
                  <p className="text-smokyBlack text-sm">Item Total</p>
                  <p className="text-dark font-bold text-xl">$13.50</p>
                </div>
              </div> */}
              {/* <-------CBM -----> */}
              <div
                id="totalBill"
                className="flex flex-row justify-between gap-10 mt-8"
              >
                <button
                  type="submit"
                  className="flex-five py-4 text-center text-base font-medium rounded-3xl bg-primary  active:bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:rounded-2xl"
                  disabled={isSubmitting || isValidating}
                >
                  Add to Cart
                </button>
                {/* <div>
                  <p className="text-smokyBlack text-sm">Item Total</p>
                  <p className="text-dark font-bold text-xl">$13.50</p>
                </div> */}
              </div>

              {/* <----- CB ------>*/}
              {/* <button
                type="submit"
                disabled={isSubmitting || isValidating}
                className="ml-auto  flex flex-row justify-center items-center px-8 py-4 rounded-2xl bg-primary active:bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:rounded-2xl"
              >
                <span>Continue</span>
                <span className="flex justify-center items-center {${isSubmitting? disabled: animate-spin}}"></span>
              </button> */}
              {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default ProductCustomization;
