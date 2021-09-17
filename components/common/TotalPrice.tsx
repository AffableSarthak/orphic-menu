import { useContext, useEffect, useState } from "react";
import sessionContext from "../../context/session/context";

const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { stagedItems } = useContext(sessionContext);
  let singleDishAmount = 0;
  let tp = 0;
  useEffect(() => {
    stagedItems.forEach((stagedItem: IstagedItem) => {
      if (stagedItem.item.customization) {
        let custPrice = 0;
        let temp = Object.entries(stagedItem.item.customization);
        // console.log(temp, "temp from total price");
        // temp.map((s: any) => {
        //   console.log(typeof s == "object");

        //   // console.log(s.split(",")[1] * 1);
        // });

        temp.forEach((t: any) => {
          if (t[0] === "Add_On") {
            t[1].forEach((fa: string) => {
              custPrice += parseInt(fa.split(",")[1]);
            });
          } else {
            custPrice += parseInt(t[1].split(",")[1]);
          }
        });
        singleDishAmount =
          (custPrice + parseInt(stagedItem.item.price)) * stagedItem.qty;
        tp = tp + singleDishAmount;
      } else {
        singleDishAmount = parseInt(stagedItem.item.price) * stagedItem.qty;
        tp += singleDishAmount;
      }
    });
    setTotalPrice(tp);
  }, [stagedItems]);
  return <span>₹{totalPrice}</span>;
};

export default TotalPrice;
