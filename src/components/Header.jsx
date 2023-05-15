"use client";
import React, { memo, useEffect, useState } from "react";
import LgNav from "./LgNav";
// import Logo from './logo';
import TestNav from "./SmNav";

// import "../styles/header.css";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setScroll(scrollY > 20);
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll]);

  return (
    <div
      className={`${
        scroll ? "bg-black" : "bg-transparent"
      } transition-all ease-in-out duration-200 bg-opacity-60 text-white font-semibold`}
    >
      <div className={"container mx-auto "}>
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
