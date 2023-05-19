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
          <li
            onClick={closeBar}
            key={x.id}
            className="text-lg group transition duration-300"
          >
            <Link href={`${x.href}`} className="mb-1">
              {x.item}
            </Link>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[3px] bg-yellow" />
          </li>
        );
      })}
    </>
  );
}

export default memo(Li);
