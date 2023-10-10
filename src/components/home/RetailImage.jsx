export default function RetailImage({ image }) {
  return (
    <div className="w-40 h-40 xl:w-80 xl:h-80 flex justify-center items-center">
      <img src={image} alt="retail-image" />
    </div>
  );
}
