import Image from "next/image";
import React from "react";
import Project3 from "../../../public/project3.jpg";
import Project1 from "../../../public/project1.jpg";
import Project2 from "../../../public/project2.png";
import Link from "next/link";

const OurWork = () => {
  return (
    <section className="bg-[#121519] text-[#F6F6F6]">
      <div className="container mx-auto flex flex-col items-start md:py-28 py-16  px-5">
        <div className="md:w-3/5">
          <h1 className="text-5xl pb-3">Our works</h1>
          <p className="text-lg">
            kreodeck was founded to help startups, entrepreneurs, and
            businesses around the world make great products by taking advantage
            of our technical expertise in product design and software
            development. By choosing kreodeck as your technology partner, you
            can take on more business and challenges while getting unlimited
            support from our team
          </p>
        </div>
      </div>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:justify-center  text-2xl  px-5 gap-14 ">
      <div className="flex flex-col items-center gap-3 justify-self-center max-w-sm ">
          <h3 className=" md:py-5 py-3">
            <span className="text-[#ffda44] ">ServoFeat</span>
          </h3>
          <p className="text-lg text-center mb-3 line-clamp-3">
          ServoFeat is Smart Restaurant System. ServoFeat covers all the nooks of your business and assists you to manage remotely so that you can focus on enlarging your firm
          </p>
          <div className="w-full max-w-[300px] aspect-video "><a href="https://www.servofeat.com/" className="mb-5"><Image src={Project3} className="h-full w-full" alt="img" /></a></div>
          <Link href='https://www.servofeat.com/'><button className=" bg-black mt-5 py-3 px-20 rounded-md hover:bg-[#ffda44] border-2 border-[#ffda44] text-[#ffda44] hover:text-black font-medium" >
            View
          </button></Link>
        </div>

        <div className="flex flex-col items-center gap-3 justify-self-center max-w-sm">
          <h3 className=" md:py-5 py-3">
            <span className="text-[#ffda44] ">Ryzer</span>
          </h3>
          <p className="text-lg text-center mb-3 line-clamp-3">
          mission to re-shape the alternative investments market & allow everyone to join in its massive growth, we are Digitising alternate investment assests that can be sold, hold & buy anytime, anywhere.
          </p>

          <div className="w-full max-w-[300px] aspect-video"><a href="https://ryzer.app/" className="mb-5"><Image src={Project2}  alt="img" className="h-full w-full" /></a></div>
          <Link href="https://ryzer.app/"><button className=" bg-black py-3 px-20 mt-5 rounded-md hover:bg-[#ffda44] border-2 border-[#ffda44] text-[#ffda44] hover:text-black font-medium">
            View
          </button></Link>
        </div>
        <div className="flex flex-col items-center gap-3 justify-self-center max-w-sm mb-5">
          <h3 className=" md:py-5 py-3 ">
            <span className="text-[#ffda44] ">Mintelium</span>
          </h3>
          <p className="text-lg text-center mb-3 line-clamp-3">
          How we builted Zero Knowledge Proof (Zk Proof) ID solution that is a decentralised, self-sovereign and private identity solution for the next iteration of the internet.
          </p>
          <div className="w-full max-w-[300px] aspect-video"><a href="https://mintelium.com/" className="mb-5"><Image src={Project1} width={600} alt="img" /></a></div>
          <Link href="https://mintelium.com/"><button className=" bg-black py-3 mt-5 px-20 rounded-md hover:bg-[#ffda44] border-2 border-[#ffda44] text-[#ffda44] hover:text-black font-medium">
            View
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
