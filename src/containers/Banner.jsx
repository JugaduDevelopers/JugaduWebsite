import React from "react";

const Banner = () => {
  return (
    <section className="bg-black h-screen px-10 lg:px-20 justify-center flex flex-col items-start gap-14">
      <h1 className="text-whiteSmoke text-6xl md:text-9xl">
        Custom Software <br /> Development Company
      </h1>
      <h3 className="text-whiteSmoke text-3xl md:text-6xl">
        Idealogic materializes ideas into software. <br /> Find out what
        solutions we can create for your business
      </h3>
      <button className="bg-turquoise py-3 px-14 rounded-md">
        Get in touch
      </button>
    </section>
  );
};

export default Banner;
