import React from "react";
import One from "../../public/icons/one.svg";
import Two from "../../public/icons/two.svg";
import Three from "../../public/icons/three.svg";
import Four from "../../public/icons/four.svg";
import Five from "../../public/icons/five.svg";
import Six from "../../public/icons/six.svg";

const CustomApp = () => {
  return (
    <section className="bg-[#121519]">
    <div className=" py-10 px-5 container mx-auto  flex flex-col justify-center items-start gap-10">
      <h1 className="text-4xl font-bold text-white">
        How do we work on the custom app development?
      </h1>
      <div className="h-2 bg-yellow w-36 lg:w-1/3 rounded" />
      <div className="text-lg text-white mb-10">
        We offer a simple and clear workflow for app development from the idea
        you have to a fully functional product:
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 gap-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-row gap-7 items-center">
            <One />
          </div>
          <div className="text-white text-lg">
            Send the Application form and describe your idea and objectives;
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Two />
          </div>
          <div className="text-white text-lg">
            Schedule the first call with our Sales and Business Analytics;
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Three />
          </div>
          <div className="text-white text-lg">
            Get a product requirement document (PRD) and a development plan;
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Four />
          </div>
          <div className="text-white text-lg">
            Approve the plan and the PRD, sign the agreement and make a payment;
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Five />
          </div>
          <div className="text-white text-lg">
            Control our work on the product throughout all the stages;
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Six />
          </div>
          <div className="text-white text-lg">
            Get a functional product with our consultations, support and
            knowledge transfer to your team.
          </div>
        </div>
      </div>
    </div></section>
  );
};

export default CustomApp;
