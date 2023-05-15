import AppDev from "@/containers/AppDev";
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
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppDev />
      <CreateApp />
      <Needs />
      <Languages />
      <CustomApp />
      <WebDev />
      <Processes />
      <Technologies />
      <ProductDesign />
      <Establishment />
      <Services />
      <Blockchain />
      <BlockchainDev />
      <LaunchProducts />
      <TechnologyStack />
    </div>
  );
}
