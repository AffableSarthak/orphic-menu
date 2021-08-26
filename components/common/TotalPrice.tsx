import { useContext, useEffect, useState } from "react";
import sessionContext from "../../context/session/context";

const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { stagedItems } = useContext(sessionContext);
  let singleDishAmount = 0;
  let tp = 0;
  useEffect(() => {
    stagedItems.forEach(
      (stagedItem: IstagedItem) => (singleDishAmount = parseInt(stagedItem.item.price) * stagedItem.qty)
    );
    stagedItems.forEach((stagedItem: IstagedItem) => {
      singleDishAmount = parseInt(stagedItem.item.price) * stagedItem.qty;
      tp += singleDishAmount;
    });
    setTotalPrice(tp);
  });
  return <span>{totalPrice}</span>;
};

export default TotalPrice;
