import React from "react";
import Ewalete from "../../public/icons/ewalete.svg";
import Defi from "../../public/icons/defi.svg";
import Crypto from "../../public/icons/crypto.svg";

const BlockchainDev = () => {
  return (
    <section className="bg-white">
    <div className=" container mx-auto p-5 flex flex-col justify-center gap-20 py-10 md:gap-32">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-black ">
          Our custom blockchain  development services
        </h1>
        <div className="h-2 bg-yellow w-36 lg:w-1/3 rounded" />
        <div className=" text-black text-lg lg:text-xl font-bold">
          We offer white-label custom-developed and <br /> pre-designed
          solutions for
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10">
        <div className="flex flex-col gap-5 shadow-lg py-7 px-4">
          <Ewalete />
          <h4 className="text-black flex-1 text-2xl">e-waletes</h4>
        </div>
        <div className="flex flex-col gap-5 shadow-lg p-2">
          <Defi />
          <h4 className="text-black flex-1 text-2xl">DeFi platforms</h4>
        </div>
        <div className="flex flex-col gap-5 shadow-lg p-2">
          <Crypto />
          <h4 className="text-black flex-1 text-2xl">Crypto exchanges</h4>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BlockchainDev;
