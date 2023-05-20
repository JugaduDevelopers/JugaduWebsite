"use client";
import React, { memo, useEffect, useState } from "react";
import LgNav from "./LgNav";
import TestNav from "./SmNav";
import Link from "next/link";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setScroll(scrollY > 100);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll]);

  return (
    <div
      className={`${
        scroll ? "bg-opacity-90" : "bg-opacity-100"
      } transition-all ease-in-out bg-black duration-200  text-white font-semibold px-5`}
    >
      <div className={"container mx-auto"}>
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl lin">
            Jugadu Developers
          </Link>
          <LgNav />
          <TestNav />
          <a href="#contact" className=" max-md:hidden">
            <button className="bg-yellow py-2 px-10 text-black font-semibold rounded-md">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
