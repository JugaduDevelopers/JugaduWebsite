import React from "react";
import Form from "./Form";

const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-around max-md:flex-col container mx-auto">
        <div className="bg-white w-full">
          <div className=" flex flex-col gap-2 justify-center py-40">
            <h4 className="text-5xl">Share your idea with us.</h4>
            <div className="bg-yellow h-[6px] w-20  rounded-lg" />
            <p>Fill in the application form for a call</p>
          </div>
        </div>
        <div className="bg-yellow  w-full rounded-md py-28 px-10 flex flex-col gap-2">
          <div className="">
            <h5>Contact us</h5>
            <p className="mb-6 py-2">Fill in the application form for a call</p>
            <Form />
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 py-10 text-[#848587]">
        <div className="flex justify-evenly flex-wrap gap-2 container mx-auto py-10 footer-common">
          <div className="max-md:hidden max-w-xs">
            <h3>Logo</h3>
            <p>
              Custom software development company with focus on app development
              and blockchain.
            </p>
          </div>
          <ul>
            <h6 className="font-semibold text-[#121519]">Our Company</h6>
            <li>About us</li>
            <li>Careers</li>
            <li>Our approach</li>
            <li>Our works</li>
          </ul>
          <ul>
            <h6 className="font-semibold text-[#121519]">Services</h6>
            <li>Blockchain</li>
            <li>Design</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Quality assurance</li>
          </ul>
          <ul>
            <h6 className="font-semibold text-[#121519]">Talk to us</h6>
            <li>contact@jugadudevelopers.com</li>
            <li>+91123456789</li>
            <li>+91123456789</li>
            <li>+91123456789</li>
          </ul>
          <ul>
            <h6 className="font-semibold text-[#121519]">Legal</h6>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="w-3/4 bg-gray-500 bg-opacity-60 rounded-lg h-[1px] mx-auto container" />
        <div className="flex md:hidden items-center justify-center mx-auto container py-5">
          <h3>Logo</h3>
        </div>
        <div className="flex items-center justify-center mx-auto container py-5">
          <p>@ 2023 Jugadu Developers. All rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
