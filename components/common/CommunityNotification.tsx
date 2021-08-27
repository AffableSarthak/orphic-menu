import React, { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import sessionContext from "../../context/session/context";

const CommunityNotification = () => {
  /**
   *
   * session snap shot to get the notifications
   *
   */
  //@ts-ignore
  const [stagedItem, setStagedItem] = useState<IstagedItem>(undefined);
  const { stagedItems } = useContext(sessionContext);

  useEffect(() => {
    const tempStaged = stagedItems[stagedItems.length - 1];
    setStagedItem(tempStaged);
  }, [stagedItems]);

  console.log(stagedItem === undefined);
  return (
    <div
      id="addNotify"
      className="absolute top-[140px] left-[15px] w-11/12 mx-auto bg-whiteColor p-4 rounded-lg shadow-xl text-center"
    >
      {stagedItem === undefined ? (
        <div>Loading.. | no item yet added</div>
      ) : (
        <p>
          <span className="text-secondary">{stagedItem.username}</span> added{" "}
          <span className="font-bold text-smokyBlack">
            {" "}
            {stagedItem.item.itemName}
          </span>{" "}
          <span className="inline-block ml-2">{/* <BsArrowRight /> */}</span>
        </p>
      )}
    </div>
  );
};

export default CommunityNotification;
