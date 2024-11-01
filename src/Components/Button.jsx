import { IoIosArrowForward } from "react-icons/io";

const Button = ({ boutonContent }) => {
  return (
    <button className="py-2 px-4 flex items-center gap-2 justify-center rounded-lg font-semibold bg-[#c7f324] text-black text-[13px] hover:bg-white ease-in-out transition">
      {boutonContent}
      <IoIosArrowForward size={10} />
    </button>
  );
};

export default Button;
