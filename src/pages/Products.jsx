import { useEffect, useState } from "react";
import { Link, useParams }     from "react-router-dom";
import MainTitle   from "../components/MainTitle";
import ProductCard from "../components/ProductCard";
import FilterBox   from "../components/products/FilterBox";
import data from "./../assets/data.json";

export default function Products() {
  const [finalProducts, setFinalProducts] = useState(null);
  const { productType } = useParams();
  const productData = data[productType];

  useEffect(() => {
    // CHECKING IF THERE'S ANY FILTERS APPLIED
    if (window.location.pathname != `/${productType}`) {
      const theFilter        = decodeURIComponent(window.location.pathname.split("/").pop());
      const filteredProducts = productData.products.filter(
        (product) =>
          product?.type?.includes(theFilter)   ||
          product?.region?.includes(theFilter) ||
          product?.roast?.includes(theFilter)  ||
          product?.size?.includes(parseInt(theFilter)) ||
          product?.container == theFilter
      
      ); 

      setFinalProducts(filteredProducts.map((product) => (<ProductCard key={ product.id } toPath={`/${productType}/${product.title}`} image={ product.images[0] } mainTitle={ product.title } wholeProduct={product} />)))
    } else {
      setFinalProducts(productData.products.map((product) => (<ProductCard key={ product.id } toPath={`/${productType}/${product.title}`} image={ product.images[0] } mainTitle={ product.title } wholeProduct={product} />)))
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className="banner flex justify-center items-center">
        <img src={productData.banner} alt="banner" className="w-full h-full" />
      </div>

      <div className="flex flex-col justify-center items-center text-center my-5 leading-10">
        <MainTitle title={productType} />
        <p className="opacity-70">{productData.about}</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-5">
          {productData.filters && 
            <div className=" flex-wrap lg:w-1/3 gap-5 lg:gap-0 flex lg:flex-col lg:items-between">
              { productData.filters.map((filter) => (
                <div key={Object.keys(filter)[0]} className="mb-5">
                  <p className="text-2xl uppercase font-semibold mb-1">{ Object.keys(filter)[0] }</p>

                  <ul className="flex gap-3 flex-wrap">
                    { filter[Object.keys(filter)[0]].map((li) => ( <FilterBox key={li} toPath={`/${productType}/filter/${li}`} filterName={li} /> )) }
                  </ul>
                </div>
              ))}
            {
              window.location.pathname != `/${productType}` &&
              (
                <div className="flex flex-col gap-1">
                  <hr />
                  <Link to={`/${productType}`} className="p-2 border w-fit bg-red-200 hover:bg-red-300 uppercase transition-all duration-300" >clear filters</Link>
                  <p className="p-2 border w-fit bg-slate-200 transition-all duration-300 capitalize"> { decodeURIComponent(window.location.pathname.split("/").pop()) } </p>
                </div>
              )
            }
            </div>}
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {JSON.stringify(finalProducts) == "[]" ? <p className="text-4xl uppercase w-full col-span-2 flex items-center justify-center">there's no products</p> : finalProducts}
        </div>
      </div>
    </>
  );
}
