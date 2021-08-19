import Image from "next/image";
import pizzaMatte from "../../public/usernameImages/pizzaMatte.png";
import burgerSmall from "../../public/usernameImages/burgerSmall.png";
import friesIsometric from "../../public/usernameImages/friesIsometric.png";
import hotDog from "../../public/usernameImages/hotDog.png";
import ketchupMayo from "../../public/usernameImages/ketchupMayo.png";
import orphicLogo from "../../public/usernameImages/orphicLogo.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
// import { useContext } from "react";
// import eatriesContext from "../../context/eateries/eatriesContext";
const UserDetail = () => {
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

      <div id="userNameHeadings" className="mt-8">
        <h2 className="text-4xl font-bold mb-4 text-center">orphic.</h2>
        <p className="text-gray-500 text-sm text-center font-medium">Your favorite meals in 3D</p>
      </div>

      <div className="mt-5">
        <form action="" className="block px-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-whiteColor w-full px-8 py-4 rounded-2xl mb-5"
          />

          <div className="flex justify-end">
            <a href="" className="flex flex-row justify-center items-center px-8 py-4 rounded-2xl bg-primary">
              <span>Continue</span>
              <span className="flex justify-center items-center">
                <BsArrowRight />
              </span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserDetail;
