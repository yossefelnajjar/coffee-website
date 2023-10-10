export default function FooterMainList({ headingTitle, children }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="uppercase font-semibold text-xl">{headingTitle}</h3>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}
