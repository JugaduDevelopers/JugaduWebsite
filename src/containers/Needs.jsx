import React from "react";
import Healthcare from "../../public/icons/healthcare.svg";
import Cpay from "../../public/icons/cpay.svg";
import RealEstate from "../../public/icons/realEstate.svg";
import Lifestyle from "../../public/icons/lifestyle.svg";
import LG from "../../public/icons/logisticsGlobal.svg";
import Taxi from "../../public/icons/taxi.svg";

const Needs = () => {
  return (
    <section className="bg-[#121519]">
    <div className="px-5 py-10 container mx-auto flex flex-col justify-center items-start gap-10">
      <h1 className="text-4xl font-bold text-white">
        We look into your needs, utilizing our industry-specific experience
      </h1>
      <div className="h-2 bg-yellow w-36 lg:w-1/3 rounded" />
      <div className="text-lg text-white mb-10">
        kreodeck teams have been working on app development in different niches
        for more than 5 years. Our company offers a client-oriented approach for
        any project we work on. We analyze the niche our clients want to launch
        their products, constitute the development plan and features list for
        the applications. We are experienced in:
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        <div className="flex flex-col lg:flex-1 gap-5">
          <Healthcare />
          <h4 className="text-white text-2xl">Health Care</h4>
          <div className="text-white text-lg">
            We can cover any QA need or requirement that you might have, no
            matter the size or complexity of the project.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Cpay />
          <h4 className="text-white text-2xl">Crypto-Payment</h4>
          <div className="text-white text-lg">
            kreodeck works on iOS/Android apps and mobile e-wallets for crypto
            management and payments.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <RealEstate />
          <h4 className="text-white text-2xl">Real Estate</h4>
          <div className="text-white text-lg">
            Personalized application for the real estate search and management
            in the local area. kreodeck can develop various business apps
            around the same functionality.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Lifestyle />
          <h4 className="text-white text-2xl">Lifestyle</h4>
          <div className="text-white text-lg">
            Applications for entertainment and habits tracking. We create unique
            game mechanics for your client’s involvement and retention.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <LG />
          <h4 className="text-white text-2xl">Logistics</h4>
          <div className="text-white text-lg">
            We use blockchain technology in the logistics solutions we create.
            It allows the exchange of encrypted data between the various actors
            connected into one business platform.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Taxi />
          <h4 className="text-white text-2xl">Taxi</h4>
          <div className="text-white text-lg">
            kreodeck created functionality for applications like Uber, building
            a smooth ecosystem with real-time data exchange with your main
            platform.
          </div>
        </div>
      </div>
    </div></section>
  );
};

export default Needs;
