import React from "react";
import CryptoBanks from "../../public/icons/cryptoBanks.svg";
import Stablecoins from "../../public/icons/stablecoins.svg";
import SmartContracts from "../../public/icons/smartContracts.svg";
import Logistics from "../../public/icons/logistics.svg";
import Contracts from "../../public/icons/contracts.svg";
import Payment from "../../public/icons/payment.svg";
import Platforms from "../../public/icons/platforms.svg";

const LaunchProducts = () => {
  return (
    <section className="bg-[#121519]">
    <div className=" container mx-auto flex flex-col px-5 py-10 justify-center items-start gap-10">
      <h2 className="text-white text-4xl font-bold mb-7">
        Launch the products in these industries with our help
      </h2>
      <div className="grid grid-cols-1 grid-rows-6 gap-5 lg:grid-cols-2 lg:grid-rows-3 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <CryptoBanks />
          <h4 className="text-white text-2xl">Crypto banks</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Stablecoins />
          <h4 className="text-white text-2xl">Stablecoins</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <SmartContracts />
          <h4 className="text-white text-2xl">Custom smart contracts</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Logistics />
          <h4 className="text-white text-2xl">
            Logistics & supply chain solutions
          </h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Contracts />
          <h4 className="text-white text-2xl">Contract execution platforms</h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Payment />
          <h4 className="text-white text-2xl">
            Payment acceptance and processing platforms
          </h4>
        </div>
      </div>
    </div></section>
  );
};

export default LaunchProducts;
