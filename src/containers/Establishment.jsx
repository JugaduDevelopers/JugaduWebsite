import React from "react";

const Establishment = () => {
  return (
    <div className="bg-black py-20 px-10 md:px-20 flex flex-col justify-center items-start gap-10">
      <h1 className="text-5xl md:text-9xl text-whiteSmoke">
        Why Did We Establish a Separate <br /> Design Studio?
      </h1>
      <div className="h-2 bg-queenBlue w-28 rounded" />
      <div className="text-xl md:text-3xl text-whiteSmoke">
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
    </div>
  );
};

export default Establishment;
