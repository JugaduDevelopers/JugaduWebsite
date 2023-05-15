import React from "react";
import Mobile from "../../public/icons/mobile.svg";
import Tab from "../../public/icons/tab.svg";

const CreateApp = () => {
  return (
    <div className="bg-whiteSmoke py-20 px-10 md:px-20 flex flex-col justify-center items-start gap-10">
      <h1 className="text-5xl md:text-9xl text-black">
        Create the apps for your business with us
      </h1>
      <div className="h-2 bg-queenBlue w-28 rounded" />
      <div className="text-lg md:text-xl text-black">
        We develop mobile applications for various business needs. Idealogic
        team can either start with a fresh idea of yours and develop the app
        from scratch, or build the application that will reach more clients with
        the existing services. We develop iOS and Android solutions that can be
        connected with your data- processing functionality, CRM or any other
        end-point solution.
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col lg:flex-1 gap-5">
          <Mobile />
          <h4 className="text-black text-2xl">iOS applications development</h4>
          <div className="text-black text-lg">
            Idealogic creates iOS applications with the architecture that will
            meet your product requirements and features list.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Mobile />
          <h4 className="text-black text-2xl">
            Android mobile app development services
          </h4>
          <div className="text-black text-lg">
            Our teams develop applications for your Google Play account with
            technology you need.
          </div>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Tab />
          <h4 className="text-black text-2xl">
            Cross-platform custom app development
          </h4>
          <div className="text-black text-lg">
            We create applications integrated into your business ecosystem to
            offer a greater access to the services you business provides to the
            clients.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateApp;
