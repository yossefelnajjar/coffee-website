import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../redux/slices/cart-slice";

export default function Cart() {
  const cart     = useSelector(state => state.cart);
  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }

  function handleDelete(cartProduct) {
    dispatch(deleteFromCart(cartProduct));
  }

  const products = cart.map((cartProduct) => (
    <div key={cartProduct.id} className="border flex flex-col lg:flex-row rounded-lg overflow-hidden">
      <div className="h-40 w-40">
        <img src={cartProduct.images[0]} alt="product image" />
      </div>

      <div className="flex flex-col justify-evenly">
        <p className="text-3xl">{cartProduct.title}</p>
        <p className="text-3xl opacity-70">${cartProduct.price}</p>
        <p className="text-2xl opacity-70 uppercase">quantity: {cartProduct.quantity}</p>
      </div>

      <div className="flex justify-end flex-1">
        <button onClick={() => {handleDelete(cartProduct)}} className="bg-red-700 hover:bg-red-500 text-white p-4 transition-all duration-300 uppercase rounded-lg"> delete </button>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-5 min-h-[500px]">
      <h1 className="text-6xl font-semibold">Cart</h1>

      <div className="flex flex-col">
        { JSON.stringify(cart) == "[]" ? <p className="w-full text-center text-3xl capitalize">there's no products in the cart</p> : products }
      </div>

      { JSON.stringify(cart) != "[]" && 
        <div className="my-1 mx-2 text-white w-full flex gap-2 border-t pt-1 items-end flex-1">
          <button className="py-3 h-fit w-full uppercase transition-all duration-300 bg-red-700 hover:bg-red-500 rounded-lg" onClick={handleClearCart}>Clear cart</button>
          <button className="py-3 h-fit w-full uppercase transition-all duration-300 bg-violet-700 hover:bg-violet-500 rounded-lg">checkout</button>
        </div>
      }
    </div>
  );
}