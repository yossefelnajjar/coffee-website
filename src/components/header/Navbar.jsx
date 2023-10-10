import { Link } from "react-router-dom";
import down from "./../../assets/icons/down.svg";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex mt-4 gap-5 justify-center text-sm">
        <li><Link to="/coffee"  className="transition-all hover:opacity-50 flex"> Coffee  <img src={down} alt="downIcon" /> </Link></li>
        <li><Link to="/tea"     className="transition-all hover:opacity-50 flex"> tea     <img src={down} alt="downIcon" /> </Link></li>
        <li><Link to="/powders" className="transition-all hover:opacity-50 flex"> powders <img src={down} alt="downIcon" /> </Link></li>
      </ul>
    </nav>
  );
}
