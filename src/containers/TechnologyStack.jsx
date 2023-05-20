import React from "react";
import Solidity from "../../public/icons/solidity.svg";
import Quorum from "../../public/icons/quroum.svg";
import Alogrand from "../../public/icons/alogrand.svg";
import Tron from "../../public/icons/tron.svg";
import Hyperledger from "../../public/icons/hyperledger.svg";
import Polygon from "../../public/icons/polygon.svg";
import Bsc from "../../public/icons/bsc.svg";
import Ethereum from "../../public/icons/ethereum.svg";

const TechnologyStack = () => {
  return (
    <div className="bg-whiteSmoke container mx-auto flex flex-col justify-center gap-20 py-10 md:gap-32">
      <div className="flex flex-col gap-10">
        <h1 className=" text-black text-5xl">Technology stack we use</h1>
        <div className="h-2 bg-yellow w-36  rounded" />
        <div className=" text-black text-lg">
          Let your ideas be implemented into reality with our core technologies
        </div>
      </div>
      <div className="flex flex-col gap-14 md:grid md:grid-cols-2  lg:grid-cols-3">
        <div className="flex flex-col items-center gap-5">
          <Solidity />
          <h4 className="text-black text-2xl">Solidity</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Quorum />
          <h4 className="text-black text-2xl">Quorum</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Alogrand />
          <h4 className="text-black text-2xl">Alogrand</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Tron />
          <h4 className="text-black text-2xl">Tron</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Hyperledger />
          <h4 className="text-black text-2xl">Hyperledger besu</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Polygon />
          <h4 className="text-black text-2xl">polygon</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Bsc />
          <h4 className="text-black text-2xl">BSC</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Ethereum />
          <h4 className="text-black text-2xl">Ethereum</h4>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
