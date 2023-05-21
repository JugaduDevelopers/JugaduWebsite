import React from "react";
import SQL from "../../public/icons/sql.svg";
import Graphql from "../../public/icons/graphql.svg";
import Android from "../../public/icons/android.svg";
import Flutter from "../../public/icons/flutter.svg";
import Swift from "../../public/icons/swift.svg";
import RG from "../../public/icons/reactGray.svg";

const Languages = () => {
  return (
    <section className="bg-whiteSmoke">
    <div className="px-5 py-10 lg:py-20 container mx-auto flex flex-col justify-center items-start gap-10">
      <h1 className="text-4xl font-bold text-black mb-10">
        Technologies, languages and frameworks we use in custom software
        development
      </h1>
      <div className="flex flex-col gap-10 md:gap-36 md:flex-row flex-wrap ">
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
          <h4 className="text-black text-2xl">React Native</h4>
        </div>
      </div>
    </div></section>
  );
};

export default Languages;
