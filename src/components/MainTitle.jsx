export default function MainTitle({ title }) {
  return (
    <div className="flex flex-col gap-2 my-2 justify-center items-center uppercase text-center text-3xl font-bold w-fit">
      <h2>{title}</h2>
      <div className="w-1/2 h-1 rounded-full bg-violet-500 transition-all"></div>
    </div>
  );
}
