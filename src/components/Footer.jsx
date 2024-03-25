import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1200px] mx-auto sm:h-[150px] p-12 flex justify-between">
      <p className="primary-color">Denny Setya Hermawan</p>

      <div className="py-2 flex flex-row gap-4">
        <a href="https://www.linkedin.com/in/dennysetya/" target="_blank">
          <FaLinkedin size={25} color="white" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B62895611454918&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp size={25} color="white" />
        </a>
        <a href="mailto:dennysetya100@gmail.com?">
          <SiGmail size={25} color="white" />
        </a>
        <a href="https://github.com/dennysetyahermawan" target="_blank">
          <FaGithub size={25} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
