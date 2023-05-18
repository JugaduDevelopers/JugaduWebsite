import Image from "next/image";
import React from "react";
import SeedBox from "../../../public/SeedBox.webp";

const OurWork = () => {
  return (
    <section className="bg-black text-[#F6F6F6]">
      <div className="container mx-auto flex flex-col items-start md:py-28 py-16">
        <div className="md:w-3/5">
          <h1 className="text-5xl pb-3">Our works</h1>
          <p className="text-lg">
            Idealogic was founded to help startups, entrepreneurs, and
            businesses around the world make great products by taking advantage
            of our technical expertise in product design and software
            development. By choosing Idealogic as your technology partner, you
            can take on more business and challenges while getting unlimited
            support from our team
          </p>
        </div>
      </div>
      <div className="container mx-auto md:pt-28 pt-16 flex flex-wrap">
        <div className="flex flex-col items-start flex-1 pr-16">
          <h1 className="text-5xl mb-7"> Glue</h1>
          <p className="text-lg mb-7">
            Learn about the exceptional user experience (UX) and user interface
            (UI) that we provide to the clients of Glue through the custom
            crypto application developed by Idealogic.
          </p>
          <button className="mb-40 bg-black py-3 px-20 rounded-md hover:bg-[#ffda44] border-2 border-[#ffda44] text-[#ffda44] hover:text-black font-medium">
            View
          </button>
        </div>
        <div>
          <Image src={SeedBox} width={700} alt="img" />
        </div>
      </div>
      <div className="container mx-auto flex gap-40">
        <button className="font-medium">
          <span>Prev Case</span>
        </button>
        <button className="font-medium">
          <span>Next Case</span>
        </button>
      </div>
      <div className="container mx-auto md:pt-28 pt-16 flex justify-between flex-wrap text-2xl">
        <div>
          <Image src={SeedBox} width={600} alt="img" />
          <h3 className=" md:py-5 py-3">
            <span className="text-[#ffda44]">Glue</span>-Crypto App
          </h3>
        </div>
        <div>
          <Image src={SeedBox} width={600} alt="img" />
          <h3 className="md:py-5 py-3">
            <span className="text-[#ffda44]">Glue</span>-Crypto App
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
