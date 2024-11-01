const Number = ({ comment, number, sign }) => {
  return (
    <div className="w-full px-2 py-8 flex flex-col gap-2">
      <p className="text-[35px] font-semibold text-[#c7f324]">
        {sign}
        {number}
      </p>
      <p className="opacity-50 text-white text-sm">{comment}</p>
    </div>
  );
};

export default Number;
