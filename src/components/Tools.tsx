import React from "react";

const Tools = () => {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-7">
      <span className=" rounded-lg bg-violet-50 py-3 text-center text-sm font-medium text-dark md:px-12 ">
        Vite
      </span>
      <span className=" rounded-lg bg-violet-50 py-3 text-center text-sm font-medium text-dark md:px-12 ">
        Git
      </span>
      <span className=" rounded-lg bg-violet-50 py-3 text-center text-sm font-medium text-dark md:px-12 ">
        ESlint
      </span>
      <span className=" rounded-lg bg-violet-50 py-3 text-center text-sm font-medium text-dark md:px-12 ">
        Prettier
      </span>
      <span className=" rounded-lg bg-violet-50 py-3 text-center text-sm font-medium text-dark md:px-7 ">
        LightHouse
      </span>
      <span className=" rounded-lg bg-violet-50 py-3 text-center text-sm font-medium text-dark md:px-12 ">
        NPM
      </span>
    </div>
  );
};

export default Tools;

// background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
