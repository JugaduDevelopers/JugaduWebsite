import React from 'react'
import Computer from "../../public/icons/computer.svg";
import Rocket from "../../public/icons/rocket.svg";


const Idealogies = () => {
  return (
    <section className="  mt-10 ">
    <div className="container  flex flex-col  mx-auto  p-5 ">
      <h1 className="text-3xl font-bold lg:text-4xl text-left  ">
        Idealogic focuses on work with startups
      </h1>
      <div className="flex flex-col md:flex md:flex-row gap-5 mt-5 lg:mt-14">
        <div className="bg-[#ffda44]  flex-1   p-5 md:p-10 rounded-lg flex flex-col items-start justify-center ">
          <Computer />
          <h2 className="text-2xl mt-5">Minimum viable product</h2>
          <ul className="list-disc pl-5 mt-5">
            <li className="mt-2 ">Market analysis</li>
            <li className="mt-2 ">Product development planning</li>
            <li className="mt-2 ">MVP development</li>
            <li className="mt-2 ">QA and software support</li>
            <li className="mt-2 ">Product design</li>
            <li className="mt-2 ">UI/UX of the product</li>
          </ul>
        </div>
        <div className="bg-black flex-1   p-5 md:p-10  rounded-lg flex flex-col items-start justify-center ">
          <Rocket />
          <h2 className="text-2xl mt-5 text-white">
            Launch and post-launch support
          </h2>
          <ul className="list-disc pl-5 mt-5 text-white">
            <li className="mt-2 ">Product redesign</li>
            <li className="mt-2 ">Product development</li>
            <li className="mt-2 ">
              Market analysis and market fit development
            </li>
            <li className="mt-2 ">Post-release support</li>
            <li className="mt-2 ">QA and updates</li>
            <li className="mt-2 ">Platform Migration</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Idealogies