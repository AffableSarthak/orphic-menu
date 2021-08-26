import { CgShoppingBag } from "react-icons/cg";
import { useRouter } from "next/router";
import { useContext } from "react";
import sessionContext from "../../context/session/context";
import { useState, useEffect } from "react";
const CartButton = () => {
  const { stagedItems } = useContext(sessionContext);
  const [cartNo, setCartNo] = useState(0);

  const router = useRouter();
  let num = 0;
  useEffect(() => {
    stagedItems.forEach((stagedItem: IstagedItem) => (num += stagedItem.qty));
    setCartNo(num);
  });
  return (
    <>
      <div
        id="addCartBtn"
        className={`flex flex-row justify-between item-center text-xl py-3 px-4 rounded-xl text-smokyBlack shadow-lg min-w-[95px] ${
          cartNo == 0 ? "bg-whiteColor" : "bg-primary"
        } `}
        onClick={() => router.push("/app/cart")}
      >
        <span className="flex justify-center items-center ">
          <CgShoppingBag className="mr-4 text-center" />
        </span>
        <span className="bg-whiteColor px-2 rounded-full">{cartNo}</span> {/* no of items in cart*/}
      </div>
    </>
  );
};

export default CartButton;
