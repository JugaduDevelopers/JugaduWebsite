"use client";

import Link from "next/link";
import React, { memo } from "react";
import { navLinks } from "../../public/data";

function Li({ setIsOpen = () => {}, isOpen = false }) {
  const closeBar = () => setIsOpen(!isOpen);
  return (
    <>
      {navLinks.map((x) => {
        return (
          <li onClick={closeBar} key={x.id} className="text-lg">
            <Link href={`${x.href}`}>{x.item}</Link>
          </li>
        );
      })}
    </>
  );
}

export default memo(Li);
