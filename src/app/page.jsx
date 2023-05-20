import { Inter } from "next/font/google";
import Banner from "@/containers/Banner";
import Idealogies from "@/containers/Idealogies";
import Expertise from "@/containers/Expertise";
import Approaches from "@/containers/Approaches";


export default function Home() {
  return (
    <>
      <Banner/>
      <Idealogies/>
      <Expertise/>
      <Approaches/>
    </>
  );
}
