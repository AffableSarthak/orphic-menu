import Image from "next/image";
import pizzaMatte from "../../public/usernameImages/Burger.svg";
import burgerSmall from "../../public/usernameImages/Coffee.svg";
import friesIsometric from "../../public/usernameImages/Fries.svg";
import hotDog from "../../public/usernameImages/Donuts.svg";
import ketchupMayo from "../../public/usernameImages/Milkshake.svg";
import orphicLogo from "../../public/orphic_logo.svg";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import sessionContext from "../../context/session/context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import { useContext } from "react";
// import eatriesContext from "../../context/eateries/eatriesContext";
const UserDetail = (props) => {
  const { isLoading, setUsername, populateGc } = useContext(sessionContext);
  // console.log(props)

  const router = useRouter();
  let rId = props.rId;
  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    // localStorage.setItem('rId', rId)
    if (typeof window !== "undefined") {
      localStorage.setItem("rId", rId);
    }

    // console.log(localStorage.getItem("rId"));
  });

  return (
    <>
      {/* {allData && JSON.stringify(allData)} */}
      {/* <OrphicLoader isLoading={isLoading} /> */}
      <div id="imagesConatiner">
        <div id="pizzaContainer" className="text-center mt-8 ml-8">
          <Image src={pizzaMatte} width={60} height={60} />
        </div>

        <div id="foodLayer2" className="flex flex-row justify-around">
          <Image
            src={hotDog}
            // className="animate-bounce"
            width={80}
            height={80}
          />
          <Image
            src={friesIsometric}
            // className="animate-bounce"
            width={60}
            height={60}
          />
        </div>

        <div
          id="foodLayer3"
          className="flex flex-row justify-between text-center"
        >
          <Image
            src={burgerSmall}
            // className="animate-bounce"
            width={60}
            height={60}
          />
          <Image
            src={orphicLogo}
            className="animate-spin-slow"
            width={100}
            height={100}
          />
          <Image
            src={ketchupMayo}
            // className="animate-bounce"
            width={60}
            height={60}
          />
        </div>
      </div>

      <div id="userNameHeadings" className="mt-8">
        <h2 className="text-4xl font-bold mb-4 text-center">orphic.</h2>
        <p className="text-gray-500 text-sm text-center font-medium">
          Your favorite meals in 3D
        </p>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => {
            if (localStorage.getItem("rId") !== undefined) {
              router.push({
                pathname: `/app/categories/${rId}`,
              });
            }
          }}
          className="px-6 py-4 bg-primary text-dark font-semibold rounded-2xl"
        >
          <div className="flex">
            <div className="mr-2">Get Started</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* <div className="mt-5">
        <Formik
          initialValues={{ username: "" }}
          validationSchema={yup.object({
            username: yup
              .string()
              .required("Username is Required!")
              .min(3, "Atleast enter two characters")
              .max(15),
          })}
          onSubmit={async (values) => {
            await setUsername(values.username);
            if (localStorage.getItem("rId") !== undefined) {
              router.push({
                pathname: `/app/categories/${rId}`,
              });
            }
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form className="block px-4">
              <Field
                name="username"
                placeholder="Enter your Name"
                className="bg-whiteColor w-full px-8 py-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:rounded-2xl "
              />

              <p className="text-red-500 text-center h-8">{errors.username}</p>
              <button
                type="submit"
                disabled={isSubmitting || isValidating}
                className="ml-auto  flex flex-row justify-center items-center px-8 py-4 rounded-2xl bg-primary active:bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:rounded-2xl"
              >
                <span className="font-medium text-base  ">Continue</span>
                <span className="flex justify-center  items-center {${isSubmitting? disabled: animate-spin}}">
                  <BsArrowRight size={20} />
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div> */}
    </>
  );
};

export default UserDetail;

{
  /* <ErrorMessage
                name="username"
                component={'div'}
                className="text-red-500 px-4"
              /> */
}
