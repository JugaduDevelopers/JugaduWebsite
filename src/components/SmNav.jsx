"use client";
import React, { useState, memo } from "react";
import CloseMenuSvg from "../../public/icons/close_menu.svg";
import MenuSvg from "../../public/icons/menu.svg";
import Li from "./ListItems";

function SmNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`top-8 right-5 duration-200 fixed md:hidden shadow-gray-800 drop-shadow-2xl z-20`}
      >
        {isOpen ? <CloseMenuSvg width="32px" /> : <MenuSvg width="32px" />}
      </button>

      <div
        className={`top-0 right-0 fixed h-full w-4/5 bg-white text-black shadow-gray-700 p-10 z-10 drop-shadow-2xl md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-200`}
      >
        <nav>
          <ul className="flex items-center flex-col gap-12">
            <Li isOpen={isOpen} setIsOpen={setIsOpen} />
          </ul>
        </nav>
      </div>
    </>
  );
}

export default memo(SmNav);
