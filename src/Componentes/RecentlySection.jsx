import React from "react";
import { flatData } from "../DataComponent/Data";

function RecentlySection({ recentlyData}) {
  return (
    <section className=" bg-slate-50 h-[85vh] flex flex-col justify-evenly max-sm:h-auto ">
      <div className=" flex gap-1 flex-col  w-[85vw] mx-auto text-start">
        <h2 className=" font-bold text-3xl ">Recently Added</h2>
        <p className=" font-semibold  text-slate-600">
          Based on preferences of users like you
        </p>
      </div>

      <div className="Recentlt_Added_Cards scrollOff  w-[85vw] mx-auto  h-fit flex overflow-x-auto">
        {recentlyData.map((item) => (
          <div className="card flex flex-col  justify-start items-start min-w-[300px] h-fit rounded-2xl hover:shadow-lg max-sm:shadow-lg ">
            <img
              className=" rounded-2xl h-40  max-sm:border-[2px] max-sm:border-gray-400"
              src={item.img_src}
              alt="flat_img"
              srcset=""
              width="273px"
              height="172px"
            />
            <div className="description_card flex flex-col items-start gap-3 mt-1 text-[17px] ">
              <h2 className=" font-bold  ">{item.flatName}</h2>
              <div className="short_Desc text-start text-sm">
                <p className=" leading-none">{item.desc1}</p>
                <p className="text-slate-600">{item.desc2}</p>
              </div>
              <h2 className=" font-bold  text-lg ">₹ {item.price} </h2>
              <button className=" bg-green-400 text-white font-semibold px-7 py-1 rounded-md hover:shadow-xl hover:bg-green-500 text-center ">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentlySection;
