import { FaConnectdevelop } from "react-icons/fa";

const Logo = () => {
  return (
    <div className=" flex justify-Start items-center gap-1 text-[#C8F31D] font-semibold text-[30px]">
      <FaConnectdevelop size={30} />
      <p className="text-white">
        Benji <span className="text-[#C8F31D]">DevCreator</span>
      </p>
    </div>
  );
};

export default Logo;
