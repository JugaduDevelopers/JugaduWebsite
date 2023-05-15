import React from "react";
import SQL from "../../public/icons/sql.svg";
import Graphql from "../../public/icons/graphql.svg";
import Android from "../../public/icons/android.svg";
import Flutter from "../../public/icons/flutter.svg";
import Swift from "../../public/icons/swift.svg";
import RG from "../../public/icons/reactGray.svg";

const Languages = () => {
  return (
    <div className="bg-whiteSmoke py-20 px-10 md:px-20 flex flex-col justify-center items-start gap-10">
      <h1 className="text-5xl md:text-9xl text-black">
        Technologies, languages and frameworks we use in custom software
        development
      </h1>
      <div className="flex flex-col gap-36 md:flex-row flex-wrap mx-28">
        <div className="flex flex-col lg:flex-1 gap-5">
          <SQL />
          <h4 className="text-black text-2xl">SQLite</h4>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Graphql />
          <h4 className="text-black text-2xl">GraphQL</h4>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Android />
          <h4 className="text-black text-2xl">Android</h4>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Flutter />
          <h4 className="text-black text-2xl">Flutter</h4>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <Swift />
          <h4 className="text-black text-2xl">Swift</h4>
        </div>
        <div className="flex flex-col lg:flex-1 gap-5">
          <RG />
          <h4 className="text-black text-2xl">React</h4>
        </div>
      </div>
    </div>
  );
};

export default Languages;
