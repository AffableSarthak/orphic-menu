import Image from "next/image";
import pizzaMatte from "../../public/authenticateImages/pizzaMatte.png";
import burgerSmall from "../../public/authenticateImages/burgerSmall.png";
import friesIsometric from "../../public/authenticateImages/friesIsometric.png";
import hotDog from "../../public/authenticateImages/hotDog.png";
import ketchupMayo from "../../public/authenticateImages/ketchupMayo.png";
import orphicLogo from "../../public/authenticateImages/orphicLogo.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
// import { useContext } from "react";
// import eatriesContext from "../../context/eateries/eatriesContext";
const Authenticate = () => {
  // const { isLoading, allData } = useContext(eatriesContext);

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

        <div id="foodLayer3" className="flex flex-row justify-between text-center">
          <Image src={burgerSmall} width={60} height={60} />
          <Image src={orphicLogo} width={100} height={100} />
          <Image src={ketchupMayo} width={60} height={60} />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="mt-8 ">
          <h1 className="text-6xl mb-4 text-center text-smokyBlack font-semibold">orphic.</h1>
          <p className="text-xl text-gray-600">your favorite meal in 3D</p>
        </div>

        <div className="mt-4">
          <form action="" className="flex flex-col items-end">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-8 py-4 bg- border border-solid border-gray-500 bg-whiteColor rounded-2xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary"
            />
            <Link href="/app/menuPage/menu">
              <a
                type="submit"
                className="flex flex-row items-center justify-between mt-4 px-8 py-4 rounded-2xl bg-primary"
              >
                <span>Continue</span>
                <BsArrowRight className="ml-2 font-medium" />
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authenticate;
