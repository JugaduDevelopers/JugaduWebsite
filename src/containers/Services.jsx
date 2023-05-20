import React from "react";
import Identity from "../../public/icons/identity.svg";
import Rocket from "../../public/icons/rocket.svg";
import Redesign from "../../public/icons/redesign.svg";
import Mvp from "../../public/icons/mvp.svg";

const Services = () => {
  return (
    <div className="bg-whiteSmoke container mx-auto py-10 flex flex-col justify-center items-start gap-10">
      <h1 className="text-5xl text-black">
        Services Provided by Idealogic Design
      </h1>
      <div className="h-2 bg-yellow w-36 rounded" />
      <div className="text-lg text-black">
        Our Design team offers the following services:
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 gap-10 mt-20">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Identity />
          <h4 className="text-black text-2xl">Identity creation</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Rocket />
          <h4 className="text-black text-2xl">Design pack for pitching</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Redesign />
          <h4 className="text-black text-2xl">
            Redesign and design before the product launch
          </h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Mvp />
          <h4 className="text-black text-2xl">
            UX/UI for your MVP (or first prototypes)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
