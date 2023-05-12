import Banner from "@/containers/Banner";
import Navbar from "@/containers/Navbar";
import Work from "@/containers/Work";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Work />
    </div>
  );
}
