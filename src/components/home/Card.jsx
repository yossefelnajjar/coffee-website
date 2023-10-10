import { Link } from "react-router-dom";

export default function Card({ mainTitle, image, toPath }) {
  return (
    <Link to={toPath} className="relative group cursor-pointer">
      <img src={image} alt="card-image" className=" w-full" />

      <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0 opacity-40"></div>

      <div className="flex flex-col text-white gap-3 justify-center items-center absolute bottom-14 left-10 uppercase">
        <p>{mainTitle}</p>
        <div className="w-1/5 h-1 rounded-full bg-violet-500 transition-all duration-300 self-start group-hover:w-1/2"></div>
      </div>
    </Link>
  );
}
