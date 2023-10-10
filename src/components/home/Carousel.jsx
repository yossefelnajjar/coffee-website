import carousel0 from "./../../assets/images/carousel/carousel-0.webp";

export default function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner h-[60rem]">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={carousel0} className="d-block w-100" alt="carousel-image" />
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={carousel0} className="d-block w-100" alt="carousel-image" />
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img src={carousel0} className="d-block w-100" alt="carousel-image" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
