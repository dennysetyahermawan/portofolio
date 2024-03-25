import css from "../../public/images/css.png";
import html from "../../public/images/html.png";
import javascript from "../../public/images/javascript.png";
import react from "../../public/images/react.png";
import tailwind from "../../public/images/tailwind.png";
import nodejs from "../../public/images/nodejs.png";
import github from "../../public/images/github_logo_icon.png";

const Sklills = () => {
  return (
    <div className="px-5">
      <div className=" bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center">
        {/* <h2 className="text-gray-700 text-2xl md:text-3xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2> */}

        <div className="flex flex-col items-center">
          <div className="m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={html} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">Html</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={github} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">Github</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={css} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">Css</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={javascript} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">Javascript</p>
        </div>

        <div className="flex flex-col items-center">
          <div className=" m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={tailwind} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">Tailwind</p>
        </div>

        <div className="flex flex-col items-center ">
          <div className="m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={react} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">React Js</p>
        </div>

        <div className="flex flex-col items-center">
          <div className=" m-4 sm:my-0 w-[40px] md:w-[80px]">
            <img src={nodejs} alt="" width={100} height={100} />
          </div>
          <p className="mt-2">Node Js</p>
        </div>
      </div>
    </div>
  );
};

export default Sklills;
