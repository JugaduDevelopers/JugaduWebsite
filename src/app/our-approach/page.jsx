import Image from "next/image";
import React from "react";
import Comprehensive from "../../../public/icons/comprehensive.svg";

const OurApproach = () => {
  return (
    <section className="bg-[#121519] text-[#F6F6F6]">
      <div className="container mx-auto flex flex-col items-start md:py-28 py-16  px-5">
        <div className="md:w-3/5">
          <h1 className="text-5xl pb-7"> Our approach</h1>
          <p className="text-2xl font-semibold pb-4">
            Fuel your business growth with impactful digital solutions
          </p>
          <p className="text-lg">
            We deliver market-changing products and outstanding experiences. You
            can rely on our tech expertise and industry knowledge. Our team will
            craft an innovative solution tailored to your business needs
          </p>
        </div>
      </div>
      <div className="container mx-auto md:pt-28 pt-16 flex  px-5 flex-wrap">
        <div className="md:w-3/5">
          <h1 className="text-5xl pb-7">Why Idealogic?</h1>
          <p className="text-lg">
            We design, build, launch, and support digital products. Our team
            crafts solutions that power your business. We are also flexible
            enough and able to scale our operations to meet the future needs of
            our clients
          </p>
        </div>
        <div className="flex gap-10 py-10 justify-between flex-wrap ">
          <div className="flex gap-10 md:w-5/12">
            <span>
              <Comprehensive />
            </span>
            <div>
              <h2 className="text-2xl pb-3">Comprehensive service</h2>
              <p>
                Everything is under one roof - we handle every aspect of
                development from ideation and concept to delivery and launch
              </p>
            </div>
          </div>
          <div className="flex gap-10 md:w-5/12">
            <span>
              <Comprehensive />
            </span>
            <div>
              <h2 className="text-2xl pb-3">Tailored approach</h2>
              <p>
                We adapt to the needs and business goals of our clients by
                designing custom, tailor-made solutions
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 py-10 justify-between flex-wrap ">
          <div className="flex gap-10 md:w-5/12">
            <span>
              <Comprehensive />
            </span>
            <div>
              <h2 className="text-2xl pb-3">Highest delivery standards</h2>
              <p>
                We know from our own experience how crucial it is to work with
                the best professionals, calculate risks and deliver the final
                result on time
              </p>
            </div>
          </div>
          <div className="flex gap-10 md:w-5/12">
            <span>
              <Comprehensive />
            </span>
            <div>
              <h2 className="text-2xl pb-3">Agile engineering</h2>
              <p>
                A flexible development process and finest engineering practices
                ensure the best outcome while staying on budget and schedule
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-start md:py-28 py-16  px-5">
        <div className="md:w-3/5">
          <h1 className="text-5xl pb-7">Our development model</h1>
          <p className="text-lg">
            Our workflow is based on the unit-system development model. The
            development process is divided into two equally important parts –
            management and development. Our team focuses on product design and
            project management, while our partners take on engineering and
            development. This development model streamlines the design and
            development process and ensures the optimal workflow
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
