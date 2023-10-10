import { Link } from "react-router-dom";

export default function FooterLiItem({ innerText }) {
  return (
    <li className="hover:opacity-70 transition-all duration-300 font-light">
      <Link to="/">{innerText}</Link>
    </li>
  );
}
