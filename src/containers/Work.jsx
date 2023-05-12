import WorkCard from "@/components/WorkCard";
import React from "react";

const Work = () => {
  return (
    <section className="bg-whiteSmoke h-screen px-10 lg:px-20 flex flex-col justify-center items-center gap-10">
      <h2 className="text-black text-4xl lg:text-9xl">
        Idealogic focuses on work with startups
      </h2>
      <WorkCard />
      {/* <WorkCard /> */}
    </section>
  );
};

export default Work;
