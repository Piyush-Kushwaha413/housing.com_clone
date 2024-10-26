import React from "react";
import { edgeData } from "../DataComponent/Data";

function EgdeSection() {
  return (
    <div className="Housing_edge bg-violet-50  min-h-60 max-h-max w-screen py-2  flex flex-col justify-center gap-3 ">
      <div className=" flex max_width mx-auto justify-start items-center gap-3 ">
        <h2 className=" font-semibold text-3xl text-black ">
          Housing <span className="font-bold text-3xl">Edge</span>{" "}
        </h2>
        <button className=" px-4 py-[2px] text-sm text-blue-500 rounded-md border-[1.6px] border-blue-500 font-medium hover:text-blue-600 hover:border-blue-600 ">
          Explore All
        </button>
      </div>
      <div className="scrollOff  w-[80vw] flex overflow-x-auto gap-4  mx-auto max-sm:w-[94vw]  ">
        {edgeData.map((item) => (
          <div className="card bg-slate-50 rounded-lg min-w-36 min-h-32 p-1 flex flex-col justify-center items-center hover:shadow-2xl    ">
            <img src={item.imgScr} width="48px" alt="" />
            <h2 className="text-sm font-medium">{item.imgText}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EgdeSection;
