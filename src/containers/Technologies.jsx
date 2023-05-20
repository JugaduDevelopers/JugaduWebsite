import React from "react";
import ReactJS from "../../public/icons/react.svg";
import Angular from "../../public/icons/angular.svg";
import Node from "../../public/icons/node.svg";
import Flask from "../../public/icons/flask.svg";
import HTML from "../../public/icons/html.svg";
import Sass from "../../public/icons/sass.svg";
import Nest from "../../public/icons/nest.svg";
import Koa from "../../public/icons/koa.svg";

const Technologies = () => {
  return (
    <section className="bg-white">
    <div className=" py-20 px-5 container mx-auto flex flex-col justify-center items-start gap-10">
      <h1 className="text-5xl text-black">Technologies</h1>
      <div className="h-2 bg-yellow w-36 lg:w-[20%] rounded" />
      <div className="text-xl text-black flex flex-col gap-5 mb-10">
        <p>

          Let your ideas be implemented into reality with our core technologies
        </p>
        <p>
          We use the most innovative, up-to-date tools, ensuring the highest
          level of development standards
        </p>
      </div>

      <div className="grid grid-cols-1  md:flex md:flex-row flex-wrap gap-36 ">
        <div className="flex flex-col items-center gap-5 ">
          <ReactJS />
          <h4 className="text-black text-2xl">React JS</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Angular />
          <h4 className="text-black text-2xl">Angular JS</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Node />
          <h4 className="text-black text-2xl">Node JS</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Flask />
          <h4 className="text-black text-2xl">Flask</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <HTML />
          <h4 className="text-black text-2xl">HTML5</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Sass />
          <h4 className="text-black text-2xl">Sass</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Nest />
          <h4 className="text-black text-2xl">Nest JS</h4>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Koa />
          <h4 className="text-black text-2xl">Koa2</h4>
        </div>
      </div>
    </div></section>
  );
};

export default Technologies;
