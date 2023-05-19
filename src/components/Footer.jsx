import React from "react";
import Form from "./Form";
import Link from "next/link";
import Mail from "../../public/icons/mail.svg";
const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="flex w-full justify-around max-md:flex-col container mx-auto my-10 px-5"
      >
        <div className="bg-white w-full">
          <div className=" flex flex-col gap-2 justify-center py-20 md:py-40">
            <h4 className="text-5xl">Share your idea with us.</h4>
            <div className="bg-yellow h-[6px] w-20  rounded-lg" />
            <p>Fill in the application form for a call</p>
          </div>
        </div>
        <div className="bg-yellow  w-full rounded-md py-28 px-10 flex flex-col gap-2">
          <div className="">
            <h3>Contact us</h3>
            <p className="mb-6 py-2">Fill in the application form for a call</p>
            <Form />
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 py-10 text-[#848587] px-5">
        <div className="container mx-auto">
          <div className="grid-cols-auto-fit grid gap-2 justify-items-start sm:justify-items-center py-10 footer-common">
            <div className="max-md:hidden max-w-xs">
              <h3>Logo</h3>
              <p>
                Custom software development company with focus on app
                development and blockchain.
              </p>
            </div>
            <ul>
              <h6 className="font-semibold text-[#121519]">Our Company</h6>
              <li>
                <Link href={"#"}> About us</Link>
              </li>
              <li>
                <Link href={"#"}> Careers</Link>
              </li>
              <li>
                <Link href={"#"}> Our approach</Link>
              </li>
              <li>
                <Link href={"#"}> Our works</Link>
              </li>
            </ul>
            <ul>
              <h6 className="font-semibold text-[#121519]">Services</h6>
              <li>
                <Link href={"#"}>Blockchain</Link>
              </li>
              <li>
                <Link href={"#"}> Design</Link>
              </li>
              <li>
                <Link href={"#"}>Web Development</Link>
              </li>
              <li>
                <Link href={"#"}>Mobile Development</Link>
              </li>
              <li>
                <Link href={"#"}>Quality assurance</Link>
              </li>
            </ul>
            <ul>
              <h6 className="font-semibold text-[#121519]">Talk to us</h6>
              <li>
                <a href="mailto:contact@jugadudevelopers.com">
                  <Mail />
                </a>
              </li>
              <li>+91800 234 567</li>
              {/* <li>+91123456789</li> */}
              {/* <li>+91123456789</li> */}
            </ul>
            {/* <ul>
              <h6 className="font-semibold text-[#121519]">Legal</h6>
              <li>
                <Link href={"#"}>Privacy policy</Link>
              </li>
            </ul> */}
          </div>
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
