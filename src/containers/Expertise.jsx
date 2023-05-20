import React from 'react'
import { expertiseList } from "../../public/data";
import Laptop from "../../public/icons/laptop.svg";


const Expertise = () => {
  return (
    <section className=" mt-10 lg:mt-14  ">
    <div className="container flex flex-col  mx-auto  p-5 ">
      <h1 className="text-3xl font-bold lg:text-4xl text-left ">
        We have strong expertise in these areas:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 lg:mt-14 ">
        {expertiseList.map((x) => {
          return (
            <div
              className="bg-white p-5 rounded-lg drop-shadow-lg hover:drop-shadow-2xl hover:transition-all hover:duration-1000 hover:ease-out "
              key={x.heading}
            >
              <Laptop className=" bg-[#ffda44]  rounded-full overflow-visible" />
              <h2 className="text-3xl mt-5">{x.heading}</h2>
              <p className="text-lg mt-3">{x.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default Expertise