import React from "react";

const WebDev = () => {
  return (
    <section className="bg-white" id="webDev">
    <div className=" container mx-auto  flex flex-col px-5 py-14 sm:py-20  justify-center items-start gap-10">
      <h1 className="text-4xl font-bold text-black">Web Development</h1>
      <div className="h-2 bg-yellow w-36 lg:w-[20%] rounded" />
      <div className="text-lg">Future Web Platform</div>
      <div className="text-lg  text-black">
        Create your dream website or web application with us! As a full-stack
        web development company, we offer <br /> a wide range of custom
        end-to-end solutions that boost your business and run it on the web.{" "}
        <br /> We put all our efforts into creating web apps, services, and
        sites that meet your expectations and satisfy your business needs
      </div>
    </div></section>
  );
};

export default WebDev;
