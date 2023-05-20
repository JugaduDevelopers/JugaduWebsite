"use client";
import Link from "next/link";
import React, { memo } from "react";
import { navLinks } from "../../public/data";
import { usePathname } from 'next/navigation';
function Li({ setIsOpen = () => {}, isOpen = false }) {
  const pathname = usePathname();
  console.log(pathname)
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
            <span className={pathname===x.href?"block max-w-full  h-[3px] bg-yellow":"block h-[3px] bg-yellow max-w-0 group-hover:max-w-full transition-all duration-300"} />
          </li>
        );
      })}
    </>
  );
}

export default memo(Li);
