import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import orphicLogo from "../../public/orphic_logo.svg";

const BackButton = () => {
  const router = useRouter();
  const [pathValue, setPathValue] = useState("");
  useEffect(() => {
    const rId = localStorage.getItem("rId");
    setPathValue(`/app/categories/${rId}`);
  }, []);
  return (
    <>
      {pathValue === "" ? (
        <>
          <Image
            className="animate-spin z-20 bg-opacity-75"
            src={orphicLogo}
            height={30}
            width={30}
          />
        </>
      ) : (
        <span
          onClick={() => router.push({ pathname: pathValue })}
          className="inline-block  bg-whiteColor p-2 rounded-xl shadow-lg active:bg-primary"
        >
          <IoIosArrowBack className="text-smokyBlack text-2xl" />
        </span>
      )}
    </>
  );
};

export default BackButton;
