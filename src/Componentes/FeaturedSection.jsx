import React from 'react'
import { feastureCollection, } from "../DataComponent/Data";

function FeaturedSection({FeaturedData}) {
  return (
    <section className=" bg-slate-200 h-[75vh] flex flex-col justify-evenly max-sm:h-auto  max-sm:mt-10 max-sm:mb-10  max-sm:px-3  max-sm:py-2">
    <div className=" flex gap-1 flex-col  w-[85vw] mx-auto text-start">
      <h2 className=" font-semibold text-4xl ">
        Featured <span className=" font-bold">Collections</span>{" "}
      </h2>
      <p className=" font-semibold  text-slate-600">
        Handpicked projects for you
      </p>
    </div>

    <div className="Recentlt_Added_Cards scrollOff  w-[85vw] mx-auto flex overflow-x-auto gap-5">
      {FeaturedData.map((item) => (
        <div className="w-80 h-56">
          <div className="group w-80 h-56  rounded-2xl hover:shadow-lg  relative hover:cursor-pointer">
            <h2 className=" absolute text-white font-medium text-xl bottom-0 left-[9%] flex flex-col gap-0 ">
              {" "}
              {item.title}{" "}
              <span className="text-sm font-normal text-slate-200">
                {item.desc}
              </span>{" "}
            </h2>
            <div className="hover_circle group-hover:opacity-100  opacity-0 absolute h-24 w-24 rounded-full flex flex-col justify-center items-center backdrop-blur-[1px] border-[1px] bg-black/[0.3] left-1/3 top-1/4">
              <span className=" font-semibold text-2xl text-slate-200 ">
                {item.propertyNo}
              </span>
              <span className="  font-medium text-[12px] text-slate-200">
                Property
              </span>
            </div>
            <img
              className=" rounded object-center object-cover w-80 h-56 hover:shadow-inner"
              src={item.imgScr}
              alt="flat_img"
              srcset=""
            />
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default FeaturedSection