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
    <div className="bg-whiteSmoke px-10 md:px-20 flex flex-col justify-center gap-20 py-20 md:gap-32">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl md:text-9xl text-black">
          Technology stack we use
        </h1>
        <div className="h-2 bg-queenBlue w-28 rounded" />
        <div className="text-xl md:text-3xl text-black">
          Let your ideas be implemented into reality with our core technologies
        </div>
      </div>
      <div className="flex flex-col gap-14 md:grid md:grid-cols-2  lg:grid-cols-3">
        <div className="flex flex-col items-center gap-5">
          <Solidity />
          <h4 className="text-black text-4xl">Solidity</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Quorum />
          <h4 className="text-black text-4xl">Quorum</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Alogrand />
          <h4 className="text-black text-4xl">Alogrand</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Tron />
          <h4 className="text-black text-4xl">Tron</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Hyperledger />
          <h4 className="text-black text-4xl">Hyperledger besu</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Polygon />
          <h4 className="text-black text-4xl">polygon</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Bsc />
          <h4 className="text-black text-4xl">BSC</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Ethereum />
          <h4 className="text-black text-4xl">Ethereum</h4>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
