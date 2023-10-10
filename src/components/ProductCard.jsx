import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/slices/cart-slice";

export default function ProductCard({ toPath, image, mainTitle , wholeProduct }) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addToCart(wholeProduct))
  }
  
  return (
    <Link to={toPath} className="group cursor-pointer overflow-hidden">
      <div className="overflow-hidden -m-10 flex flex-col justify-center items-center relative">
        <img src={ image } alt="card-image" className="transition-all duration-300 w-1/2 h-1/2"/>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center text-center mt-10">
        <p className="transition-all mt-2 group-hover:opacity-50 font-light text-2xl">{ mainTitle }</p>
        <div className="reviews opacity-70  mt-3 mb-10 text-base"> ({wholeProduct.reviews} reviews)</div>
      </div>
    </Link>
  );
}
