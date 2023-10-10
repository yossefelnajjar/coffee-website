import { Link } from "react-router-dom";

export default function FilterBox({ toPath, filterName }) {
  return (
    <li className="p-2 border w-fit hover:bg-slate-200 transition-all duration-300 capitalize">
      <Link to={toPath} > {filterName} </Link>
    </li>
  );
}
