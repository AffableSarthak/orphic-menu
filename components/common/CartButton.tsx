import { CgShoppingBag } from 'react-icons/cg'
import { useRouter } from 'next/router'
const CartButton = () => {
  const router = useRouter()
  return (
    <>
      <div
        id="addCartBtn"
        className="flex flex-row item-center text-xl py-3 px-4 rounded-xl bg-whiteColor text-smokyBlack shadow-lg"
        onClick={() => router.push('/app/cart')}
      >
        <span className="flex justify-center items-center ">
          <CgShoppingBag className="mr-4 text-center" />
        </span>
        <span>0</span> {/* no of items in cart*/}
      </div>
    </>
  )
}

export default CartButton
