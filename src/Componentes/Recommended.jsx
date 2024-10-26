import React from 'react'
import {  RecommendedSellers, laptopStatus } from "../DataComponent/Data";
function Recommended() {
  const pro_icon =
  "https://c.housingcdn.com/demand/s/client/common/assets/expertProBadge.3a03f554.svg";
const non_pro_icon =
  "https://c.housingcdn.com/demand/s/client/common/assets/localityChamp.1904ec17.png";

  return (
    <section className=" bg-slate-50 h-[75vh] flex flex-col justify-evenly max-sm:h-auto max-sm:mt-5 max-sm:mb-10">
        <div className=" flex gap-1 flex-col  w-[85vw] mx-auto text-start">
          <h2 className=" font-semibold text-4xl ">
            Recommended <span className=" font-bold">Sellers</span>{" "}
          </h2>
          <p className=" font-semibold  text-slate-600">
            Sellers with complete knowledge about locality and verified listings
          </p>
        </div>
        <div className="Recentlt_Added_Cards scrollOff  w-[85vw] mx-auto flex overflow-x-auto gap-5 max-sm:w-[92vw] " >
          {RecommendedSellers.map((item) => (
            <div className="row_card1  flex flex-col gap-5 ">
              {item.map((item) => (
                <div className="col_card1 flex justify-between gap-2 border rounded-md border-[#fe792f] w-80 max-sm:w-72 ">
                  <div className="flex relative items-center pl-1 w-14 ">
                    <img
                      src={item.imgScr}
                      srcset=""
                      className="rounded-full aspect-square border-2 border-[#fe792f] h-[3em] "
                    />
                    <img
                      src={item.pro ? pro_icon : non_pro_icon}
                      alt="proStaus"
                      srcset=""
                      className=" absolute  bottom-2 right-1 h-7"
                    />
                  </div>

                  <div className="description flex flex-col justify-between items-start p-2 gap-1 w-64 text-sm  ">
                    <div className="first_line w-full flex justify-between items-cente">
                      <span className=" font-medium text-sm lowercase">
                        {laptopStatus? (item.title.substring(0, 10)+`..` ): (item.title.substring(0, 6)+`..` )}

                        
                      </span>
                      {item.pro ? (
                        <span className=" text-[.75rem] text-white bg-gradient-to-r from-[#ee569f] to-[#fe792f] rounded-sm  px-2 py-0 text-center leading-n uppercase">
                          {item.label}
                        </span>
                      ) : (
                        <span className=" text-[.75rem] text-white bg-[#fe792f] rounded-sm  px-2 py-0 text-center leading-n uppercase">
                          {item.label}
                        </span>
                      )}
                    </div>
                    <div className="second_line flex justify-between items-start text-[.75rem] gap-2 ">
                      <span className=" bg-[#ffe7de] rounded-2xl text-slate-500 px-2">
                         {laptopStatus? ( item.tag1.substring(0,10)+`..`) : ( item.tag1.substring(0,8)+`..`)}
                      </span>
                      <span className="bg-[#ffe7de] rounded-2xl text-slate-500 px-2">
                        {item.tag2}
                      </span>
                    </div>
                    <div className="Thrid_line flex justify-start w-full gap-2 ">
                      <span className=" border-r pr-3">
                        {item.exp}
                        <span className=" text-slate-400">Experien</span>{" "}
                      </span>
                      <span className="">
                        {item.proptNo}
                        <span className="text-slate-400"> Properties</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
  )
}

export default Recommended