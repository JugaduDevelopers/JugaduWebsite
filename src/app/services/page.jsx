import Blockchain from "@/containers/Blockchain";
import BlockchainDev from "@/containers/BlockchainDev";
import CreateApp from "@/containers/CreateApp";
import CustomApp from "@/containers/CustomApp";
import Establishment from "@/containers/Establishment";
import Languages from "@/containers/Languages";
import LaunchProducts from "@/containers/LaunchProducts";
import Needs from "@/containers/Needs";
import Processes from "@/containers/Processes";
import ProductDesign from "@/containers/ProductDesign";
import Services from "@/containers/Services";
import Technologies from "@/containers/Technologies";
import TechnologyStack from "@/containers/TechnologyStack";
import WebDev from "@/containers/WebDev";
import React from "react";

const page = () => {
  return (
    <div>
      <Blockchain />
      <BlockchainDev />
      <LaunchProducts />
      <TechnologyStack />
      <ProductDesign />
      <Establishment />
      <Services />
      <WebDev />
      <Processes />
      <Technologies />
      <CustomApp />
      <CreateApp />
      <Needs />
      <Languages />
    </div>
  );
};

export default page;
