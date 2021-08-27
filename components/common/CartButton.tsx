import { CgShoppingBag } from "react-icons/cg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const CartButton = () => {
  const router = useRouter();

  /**
   *
   * Snapshot to firebase to get staged items and it's count ++
   *
   */
  return (
    <>
      <div
        id="addCartBtn"
        className="flex flex-row item-center text-xl py-3 px-6 rounded-xl bg-primary text-smokyBlack shadow-lg"
        onClick={() => router.push("/app/cart")}
      >
        <span className="flex justify-center items-center ">
          <CgShoppingBag className=" text-center" />
        </span>
        {/* <span>0</span>  */}
        {/* no of items in cart*/}
      </div>
    </>
  );
};

export default CartButton;
