import Number from "./Number";

const SomeNumbers = () => {
  return (
    <div className="w-2/4 h-full px-4 divide-y divide-zinc-800 bg-black rounded-xl ">
      <Number number={5} comment="années d'expérience" sign="+" />
      <Number number={10} comment="grand projets participés" sign="+" />
      <Number number={99} comment="clients satisfaits" sign="%" />
    </div>
  );
};

export default SomeNumbers;
