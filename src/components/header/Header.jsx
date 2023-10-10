import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.avif";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector(state => state.cart);

  return (
    <header className="sm:px-5 xl:px-32 2xl:px-64 z-50 bg-white w-full flex flex-col py-2 fixed top-0 left-1/2 -translate-x-1/2 tracking-wider uppercase font-semibold transition-all">
      <div className="flex">
        <Link to="/" className="flex-1 flex justify-center mr-5 sm:mr-0"><img src={logo} className="w-80" alt="logo" /></Link>
        <div className="self-center"><Link to="/cart" className="hover:opacity-75">Cart ({cart.length})</Link></div>
      </div>

      <Navbar />
    </header>
  );
}
