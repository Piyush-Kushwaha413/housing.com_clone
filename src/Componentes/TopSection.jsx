import React from "react";
import { carOptions, laptopStatus, linksData } from "../DataComponent/Data";
import Utility_Component from "../UtilityComponent/Utility_Component";
import { IoDiamondOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

function TopSection({data}) {
  
  return (
    <div className={`${data?.bannerImg}  top_section relative  bg-red-400 max_width h-[25rem] rounded-b-3xl mx-auto   max-sm:w-screen`}>
      <div className="navbar h-16 flex justify-between px-20 backdrop-blur-sm bg-white/30 max-sm:justify-around max-sm:w-screen max-sm:px-0">
        {/* logo */}
        <div className=" cursor-pointer flex items-center max-sm:hidden">
          <img
            src="https://c.housingcdn.com/demand/s/client/common/assets/housing.820bbe77.png"
            alt="logo"
            width="190px"
          />{" "}
        </div>
        {/* navbar links */}
        <div className="links  flex justify-between items-center gap-7">
          {/* pay Rent button */}
          <div className="cursor-pointer">
            <Utility_Component text={"Pay Rent"} icon={<IoDiamondOutline />} />{" "}
          </div>
          {/* links */}
          {linksData.map((item) => (
            <div className="cursor-pointer text-white">
             
              <span
                className={
                  item.resposiveStatus ? `${item.resposiveStatus}  ` : ``
                }
              >
                {item.icon} {item.text}
              </span>
              
            </div>
          ))}
          {/* <div className="cursor-pointer text-white"></div> */}

          <div className="cursor-pointer px-3 py-2 bg-white rounded-md ">
            <span className="flex justify-between items-center gap-3">
              <FaBarsStaggered />{" "}
              <span className=" text-[#9a86ec]">
                <FaUserAstronaut />
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* center part */}
      <div className=" center_content mt-20 max-sm:mt-10 ">
        <img
          className="  hidden max-sm:block w-44 mx-auto"
          src="https://c.housingcdn.com/demand/s/client/common/assets/housing.820bbe77.png"
          alt=""
          srcset=""
        />
        <h2 className=" w-[60%] mx-auto  text-4xl font-semibold text-white text-start mb-5 max-sm:text-center max-sm:opacity-80 max-sm:text-xl max-sm:font-normal">
          {data?.bannerText}
        </h2>
        <div className="search_Bar w-[60%] flex flex-col gap-3  backdrop-blur-sm bg-white/30 mx-auto rounded-2xl max-sm:w-auto  ">
          <div className="Options px-5 pt-2  flex justify-start gap-8 text-white font-semibold  mb-1">
          <NavLink to="/buys">  
            <span className=" cursor-pointer text-yellow-50 focus:border-b-2  focus:border-yellow-50 hover:text-white border-yellow-50  ">
              Buy
            </span>
            </NavLink>

            <NavLink to="/rent">
            <span className=" cursor-pointer  text-yellow-50 focus:border-b-2  focus:border-yellow-50 hover:text-white border-yellow-50 ">
              Rent
            </span>
            </NavLink>

            <NavLink to="/commercial">
            <span className=" cursor-pointer  text-yellow-50 focus:border-b-2  focus:border-yellow-50 hover:text-white border-yellow-50 ">
              Commercial
            </span>
            </NavLink>

            <NavLink to="/plots">
            <span className=" cursor-pointer  text-yellow-50 focus:border-b-2  focus:border-yellow-50 hover:text-white border-yellow-50 ">
              Plots
            </span>
            </NavLink>


            <NavLink to="/Coliving">
            <span className=" cursor-pointer  text-yellow-50 focus:border-b-2  focus:border-yellow-50 hover:text-white border-yellow-50 ">
              {laptopStatus?`PG/Co-Living`: `PG`}
            </span>
            </NavLink>

          </div>
          <div className="">
            <form className=" w-full bg-white flex justify-between items-center py-4 px-3 rounded-2xl ">
              <div className=" w-[80%] flex justify-start items-center gap-1 ">
                <select
                  id="cars"
                  className=" border-r-[1.5px] py-1 max-sm:hidden "
                >
                  {carOptions.map((item) => (
                    <option value={item.text}>{item.text}</option>
                  ))}
                </select>
                <input
                  type="text"
                  className=" w-[100%] py-1 border-none outline-none"
                  placeholder="Search for locality ,landmark , project or builder"
                />
              </div>

              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className=" bg-green-400 py-2 px-8 rounded-full text-white font-semibold hover:bg-green-500 text-lg max-sm:hidden "
              >
                Search
              </button>
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className=" bg-green-400 py-2 px-8  rounded-full text-white font-semibold hover:bg-green-500 text-lg hidden max-sm:block  max-sm:px-2 "
              >
                <IoMdSearch />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="area" className=" bg-transparent ">
        <ul class="circles" className="">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default TopSection;
