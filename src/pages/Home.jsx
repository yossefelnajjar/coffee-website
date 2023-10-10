import { Link } from "react-router-dom";
import CarouselImg from "./../assets/images/carousel/carousel-0.webp";
import teaImg      from "./../assets/images/teaHomeBanner.jpg";
import coffeeImg   from "./../assets/images/coffeeHomeBanner.jpg";
import downIcon    from "./../assets/icons/down.svg";

import Card        from "./../components/home/Card";
import Carousel    from "./../components/home/Carousel";
import MainTitle   from "./../components/MainTitle";
import ProductCard from "../components/ProductCard";
import Retail      from "./../components/home/Retail";
import data from "./../assets/data.json";

export default function Home() {
  return (
    <>
      <Carousel />

      <div className="flex gap-4 flex-col justify-center items-center my-10 text-4xl font-semibold">
        <MainTitle title="Buy coffee, tea, powders & more" />

        {/* FIRST ROW */}
        <div className="grid xl:grid-cols-2 w-full gap-4">
          <Card mainTitle="shop coffee" image={coffeeImg} toPath="/coffee" />
          <Card mainTitle="shop tea"    image={teaImg} toPath="/tea"    />
        </div>

        {/* SECOND ROW */}
        <div className="grid xl:grid-cols-3 w-full gap-4">
          <Card mainTitle="shop powders"       image={CarouselImg} toPath="/powders" />
          <Card mainTitle="explore hot drinks" image={CarouselImg} toPath="/"        />
          <Card mainTitle="gift cards yum"     image={CarouselImg} toPath="/"        />
        </div>
      </div>

      <div className="flex gap-4 flex-col justify-center items-center my-10 text-4xl font-semibold">
        <MainTitle title="new coffee stock" />

        <div className="grid xl:grid-cols-4 w-full gap-4">
          <ProductCard mainTitle={data.coffee.products[0].title} image={data.coffee.products[0].images[0]} toPath={`/coffee/${data.coffee.products[0].title}`} wholeProduct={data.coffee.products[0]} />
          <ProductCard mainTitle={data.coffee.products[1].title} image={data.coffee.products[1].images[0]} toPath={`/coffee/${data.coffee.products[1].title}`} wholeProduct={data.coffee.products[1]} />
          <ProductCard mainTitle={data.coffee.products[2].title} image={data.coffee.products[2].images[0]} toPath={`/coffee/${data.coffee.products[2].title}`} wholeProduct={data.coffee.products[2]} />
          <ProductCard mainTitle={data.coffee.products[3].title} image={data.coffee.products[3].images[0]} toPath={`/coffee/${data.coffee.products[3].title}`} wholeProduct={data.coffee.products[3]} />
        </div>

        <Link to="/coffee" className="group flex my-5 justify-center items-center uppercase text-lg hover:opacity-70 transition-all duration-300">
          <p>shop coffee</p>
          <img src={downIcon} className="-rotate-90 transition-all duration-300 group-hover:translate-x-1" alt="downIcon" />
        </Link>
      </div>

      <div className="flex gap-4 flex-col justify-center items-center my-10 text-4xl font-semibold">
        <MainTitle title="Retail products also available at" />
        <Retail />
      </div>
    </>
  );
}
