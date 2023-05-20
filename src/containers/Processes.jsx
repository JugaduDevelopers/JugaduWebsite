import React from "react";
import One from "../../public/icons/one.svg";
import Two from "../../public/icons/two.svg";
import Three from "../../public/icons/three.svg";
import Four from "../../public/icons/four.svg";
import Five from "../../public/icons/five.svg";
import Six from "../../public/icons/six.svg";

const Processes = () => {
  return (
    <div className="bg-black container mx-auto py-20 flex flex-col justify-center items-start gap-10">
      <h1 className="text-5xl text-white">
        What does the creation process look like?
      </h1>
      <div className="h-2 bg-yellow w-36 rounded" />
      <div className="text-lg text-white mb-10">
        We offer comprehensive services and professional support at every stage
        of the process
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-7 items-center">
            <One />
            <h4 className="text-white text-3xl">Discover & Estimate</h4>
          </div>
          <div className="text-white text-lg">
            Before starting to develop the software, we do industry research and
            analysis to reduce technical and market risks. We collaborate on all
            requirements and write product specifications. Then, we plan and
            discuss with you every detail to realize your vision
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Two />
            <h4 className="text-white text-3xl">Design</h4>
          </div>
          <div className="text-white text-lg">
            After absorbing your requirements we transform them into clickable
            prototypes. We create a recognizable design with simple and
            intuitive navigation to deliver a pleasant user experience
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Three />
            <h4 className="text-white text-3xl">Development</h4>
          </div>
          <div className="text-white text-lg">
            When the designs are complete our team of architects and engineers
            build the core of your product – secured, complex and trusted. We
            base our development process on the Agile methodology, which allows
            us to use time and resources in the most effective way, keeping you
            updated and demonstrating you the results regularly
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Four />
            <h4 className="text-white text-3xl">Testing</h4>
          </div>
          <div className="text-white text-lg">
            According to our standards of the development process, we conduct
            both manual and automation testing during the product development
            lifecycle. We make sure that every link, script and form act and
            work in a proper way
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Five />
            <h4 className="text-white text-3xl">Go live</h4>
          </div>
          <div className="text-white text-lg">
            Once we finish testing and ensure that the product is usable, secure
            and reliable, we are ready for the launch
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-7 items-center">
            <Six />
            <h4 className="text-white text-3xl">Maintenance</h4>
          </div>
          <div className="text-white text-lg">
            There is always room for improvement as we work with a mindset of
            limitless progress. That's why we stay connected with our clients
            even after product release. We are ready to solve any issue at any
            time
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processes;
