import React from "react";

const Establishment = () => {
  return (
    <section className="bg-[#121519]">
    <div className=" container mx-auto py-10 px-5 flex flex-col justify-center items-start gap-10">
      <h1 className="text-4xl font-bold text-white">
        Why Did We Establish a Separate <br /> Design Studio?
      </h1>
      <div className="h-2 bg-yellow w-36 rounded" />
      <div className="text-lg text-white">
        At Idealogic, we focus on custom development through our separate
        development studio, Idealogic.dev. However, we also understand that some
        clients may have in-house development expertise and prefer to work with
        a dedicated design team. Thus, we established Idealogic Design to
        provide design services to clients seeking assistance solely with design
        and UX/UI development.
        <br /> <br />
        The Design Studio operates on the same principles and values of
        transparency, innovation, and results orientation.
      </div>
    </div></section>
  );
};

export default Establishment;
