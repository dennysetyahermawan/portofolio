import aboutme from "../../public/images/Denny.jpeg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium delectus impedit harum dignissimos corporis
              perferendis dicta explicabo, deserunt dolores iste vel? Facilis
              repudiandae distinctio, dolore obcaecati quam architecto quia?
            </p>
          </div>
        </div>
        <img
          src={aboutme}
          alt=""
          className="mx-auto rounded-3xl py-8 md:py-0"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
