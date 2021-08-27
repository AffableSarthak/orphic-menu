import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CommunityNotification = () => {
  /**
   *
   * session snap shot to get the notifications
   *
   */
  return (
    <div
      id="addNotify"
      className="absolute top-[140px] left-[15px] w-11/12 mx-auto bg-whiteColor p-4 rounded-lg shadow-xl text-center"
    >
      <p>
        <span className="text-secondary">Bhargav</span> added{" "}
        <span className="font-bold text-smokyBlack"> Cheese Burger </span>{" "}
        <span className="inline-block ml-4">
          <BsArrowRight />
        </span>
      </p>
    </div>
  );
};

export default CommunityNotification;
