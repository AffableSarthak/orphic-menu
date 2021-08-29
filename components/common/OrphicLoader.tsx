import Image from "next/image";
import React from "react";
import orphicLogo from "../../public/orphic_logo.svg";

const OrphicLoader = ({ isLoading }) => {
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Image
          className="animate-spin backdrop-filter backdrop-blur-lg"
          src={orphicLogo}
          height={60}
          width={60}
        />
      </div>
      // <div className="">

      // </div>
    );
  else {
    return <></>;
  }
};

export default OrphicLoader;
