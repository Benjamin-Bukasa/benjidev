import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="flex justify-between items-center gap-10 opacity-50">
      <FaGithub size={20} className="hover:text-[#c7f324] hover:opacity-1" />
      <IoLogoLinkedin
        size={20}
        className="hover:text-[#c7f324] hover:opacity-1"
      />
      <FaSquareInstagram
        size={20}
        className="hover:text-[#c7f324] hover:opacity-1"
      />
      <FaSquareFacebook
        size={20}
        className="hover:text-[#c7f324] hover:opacity-1"
      />
    </div>
  );
};

export default SocialMedia;
