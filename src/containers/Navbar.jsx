"use client";
import React, { useState } from "react";
import MenuIcon from "../../public/icons/menu.svg";
import CloseIcon from "../../public/icons/close.svg";

const navItems = [
  {
    id: 1,
    item: "Our Works",
    href: "#",
  },
  {
    id: 2,
    item: "Our Company",
    href: "#",
  },
  {
    id: 3,
    item: "Services",
    href: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black px-10 lg:px-20 flex justify-between items-center py-7">
      <h1 className="text-whiteSmoke text-xxl z-10">
        <a href="#"> Logo </a>
      </h1>
      <button className="lg:hidden z-10">
        {!isOpen ? (
          <MenuIcon fill={"white"} height={30} width={30} />
        ) : (
          <CloseIcon fill={"white"} height={30} width={30} />
        )}
      </button>
      {/* <nav>
        <ul className="flex flex-col lg:flex-row gap-10 items-center">
          {navItems.map((x) => {
            return (
              <li key={x.id} className="text-whiteSmoke">
                <a href={x.href}>{x.item}</a>
              </li>
            );
          })}
          <button className="bg-turquoise p-3 rounded-md lg:ml-40">
            Contact Us
          </button>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navbar;
