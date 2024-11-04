const Number = ({ comment, number, sign }) => {
  return (
    <div className="w-full px-2 py-8 flex flex-col gap-2 ">
      <p className="text-[35px] font-semibold dark:text-[#c7f324] opacity-50 dark:opacity-100 ">
        {sign}
        {number}
      </p>
      <p className="dark:opacity-50 dark:text-white text-sm">{comment}</p>
    </div>
  );
};

export default Number;
