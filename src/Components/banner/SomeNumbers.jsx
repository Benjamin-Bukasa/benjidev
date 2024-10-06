import Number from "./Number";

const SomeNumbers = () => {
  return (
    <div className="w-1/2 h-full px-4 divide-y bg-black rounded-xl ">
      <Number number={8} comment="années d'expérience" sign="+" />
      <Number number={10} comment="projets participés" sign="+" />
      <Number number={15} comment="clients satisfaits" sign="%" />
    </div>
  );
};

export default SomeNumbers;
