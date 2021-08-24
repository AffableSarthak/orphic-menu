import Image from "next/image";
import pizzaMatte from "../../public/usernameImages/pizzaMatte.png";
import burgerSmall from "../../public/usernameImages/burgerSmall.png";
import friesIsometric from "../../public/usernameImages/friesIsometric.png";
import hotDog from "../../public/usernameImages/hotDog.png";
import ketchupMayo from "../../public/usernameImages/ketchupMayo.png";
import orphicLogo from "../../public/usernameImages/orphicLogo.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import sessionContext from "../../context/session/context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import OrphicLoader from "../common/OrphicLoader";
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
    // if (typeof window !== 'undefined') {
    localStorage.setItem("rId", rId);
    // }

    console.log(localStorage.getItem("rId"));
  });

  return (
    <>
      {/* {allData && JSON.stringify(allData)} */}
      {/* <OrphicLoader isLoading={isLoading} /> */}
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
          initialValues={{ username: "" }}
          validationSchema={yup.object({
            username: yup
              .string()
              .required("Username is Required!")
              .min(3, "Atleast enter two characters")
              .max(15),
          })}
          onSubmit={async (values, formikHelpers) => {
            await setUsername(values.username);
            if (
              localStorage.getItem("username").length > 2 ||
              localStorage.getItem("rId") !== undefined
            ) {
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
              {/* <ErrorMessage
                name="username"
                component={'div'}
                className="text-red-500 px-4"
              /> */}
              <p className="text-red-500 text-center h-8">{errors.username}</p>
              {/* <div className="flex justify-end mt-5"> */}
              <button
                type="submit"
                disabled={isSubmitting || isValidating}
                className="ml-auto  flex flex-row justify-center items-center px-8 py-4 rounded-2xl bg-primary active:bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:rounded-2xl"
              >
                <span>Continue</span>
                <span className="flex justify-center items-center {${isSubmitting? disabled: animate-spin}}">
                  <BsArrowRight />
                </span>
              </button>
              {/* </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UserDetail;
