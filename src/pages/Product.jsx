import { useParams }   from "react-router-dom";
import { useDispatch } from "react-redux";
import MainTitle from "../components/MainTitle";
import { addToCart } from "../redux/slices/cart-slice";
import data          from "./../assets/data.json";

export default function Product() {
  const dispatch = useDispatch();
  const { productType, theProduct } = useParams();
  const productData  = data[productType];
  const finalProduct = productData.products.filter( (product) => product.title == theProduct)[0];
  document.title = finalProduct.title;

  function handleAddToCart() {
    dispatch(addToCart(finalProduct));
  }

  return (
    <>
      {
        // CHECKING IF THE PRODUCT IN THE URL IS NOT UNDEFINED
        finalProduct ? (
          <div className="flex flex-col xl:flex-row  md:mt-40 md:px-96 justify-center items-center">
            <div className="left w-full min-w-[20rem] md:min-w-[30rem] flex-1">
              {
                finalProduct.images.length > 1 ?
              <div id="carouselExample" className="carousel slide w-full">
                <div className="carousel-inner w-full">
                  {finalProduct.images.map((image) => {
                    if (finalProduct.images.indexOf(image) == 0) {
                      return (
                        <div key={image} className="carousel-item w-full active">
                          <img src={image} className="w-full" alt="product image" />
                        </div>
                      );
                    }
                    return (
                      <div key={ image } className="carousel-item w-full">
                        <img src={image} className="w-full" alt="product image" />
                      </div>
                    );
                  })}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-black rounded-full" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-black rounded-full" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
                :
                <img src={finalProduct.images[0]} className="w-full" alt="product image" />
              }
            </div>
            
            <div className="right flex flex-col mb-20 md:mb-0">
              <MainTitle title={finalProduct.title} />

              <div className="reviews opacity-70  mt-3 mb-10"> ({finalProduct.reviews} reviews)</div>
              
              <div className="h-80 w-fit md:w-[40rem] flex flex-col gap-1">
                <div className="bg-slate-200 rounded-lg px-4 py-2 text-3xl">
                  ${finalProduct.price}
                </div>

                <div className="bg-slate-200 rounded-lg px-4 py-2">
                  { finalProduct.short_description}
                </div>

                <div className="flex flex-1 items-end">
                  <button onClick={handleAddToCart} className=" w-fit px-4 py-2 rounded-lg bg-violet-600 text-white uppercase hover:bg-violet-500 transition-all duration-300"> add to cart </button>
                </div>
              </div>
            </div>
          </div>
        )
          : (<p className="text-3xl lg:text-9xl h-96 my-40 flex justify-center items-center uppercase"> this product is not available </p>)
      }
    </>
  );
}
