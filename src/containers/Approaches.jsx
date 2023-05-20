import React from 'react'
import { approaches } from "../../public/data";

const Approaches = () => {
  return (
    <section className="bg-[#121519] text-white mt-10 lg:mt-14  ">
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold lg:text-4xl mt-5">
        We offer a straightforward and transparent approach to any project
      </h1>
      <div className="mt-7  lg:max-w-4xl">
        {approaches.map((x) => {
          return (
            <div className="md:flex md:gap-4 mt-10 lg:mt-16" key={x.id}>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-6xl  text-[#ffda44]">
                  {x.id}.
                </h1>
                <span className="text-2xl font-extrabold md:hidden text-white">
                  {x.heading}
                </span>
              </div>
              <div>
                <h1 className="text-3xl  hidden md:block">{x.heading}</h1>
                <p className="pl-9 mt-2 text-lg sm:text-xl md:pl-0 ">
                  {x.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Approaches