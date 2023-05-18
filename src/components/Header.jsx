"use client";
import React, { memo, useEffect, useState } from "react";
import LgNav from "./LgNav";
// import Logo from './logo';
import TestNav from "./SmNav";

// import "../styles/header.css";

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
        scroll ? "bg-opacity-90" : ""
      } transition-all ease-in-out bg-black duration-200  text-white font-semibold px-5`}
    >
      <div className={"container mx-auto px-20"}>
        <div className="flex justify-between items-center py-6">
          <h2>Logo</h2>
          <LgNav />
          <TestNav />
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
