import React from "react";
import {
  cityName,
  realState,
  footerData,
  ParterSite,
  explore,
} from "../../DataComponent/Data";

function FooterSecetion() {
  return (
    <div>
      {/* secetion tagline  */}
      <secetion className="flex justify-center items-center mt-8 mb-6 ">
        <h1 className=" text-black text-4xl font-bold opacity-70  ">Part of</h1>
        <img
          src="https://c.housingcdn.com/demand/s/client/common/assets/REAGroup.e5435593.png"
          alt=""
          className="  w-44 "
        />
      </secetion>

      {/* secetion Our Brands */}
      <section className=" bg-[#1f1f1f] flex gap-72 items-center py-14 max-sm:block  ">
        <span className=" text-white opacity-50 font-semibold ml-5">
          Our Brand
        </span>
        <div className=" w-44 h-11 flex gap-28 max-sm:w-full max-sm:justify-center  ">
          <img
            src="https://d1ghtzyjrbl4t6.cloudfront.net/mobile/images/pt-logo.3f5151f7.png"
            alt=""
            srcset=""
            className=" "
          />
          <img
            src="https://d1ghtzyjrbl4t6.cloudfront.net/mobile/images/MakaanLogo.499fefd7.jpg"
            alt=""
            srcset=""
          />
        </div>
      </section>

      {/* footer Links */}
      <section className="bg-black w-full  max-sm:overflow-x-auto  ">
        <div className="bg-black  max-sm:w-max p-9 flex  max-sm:overflow-x-auto  justify-evenly max-sm:gap-4">
          {/* Real State */}
          <ul className="  flex flex-col gap-2 justify-start text-start w-auto">
            {realState.map((item) => (
              <li className=" text-start ">
                <a
                  className="  text-white opacity-60 text-start hover:opacity-100 "
                  href={item.link}
                >
                  Real State in {item.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="  flex flex-col gap-2 justify-start text-start">
            {cityName.map((item) => (
              <li className=" text-start">
                <a
                  className="  text-white opacity-60 text-start "
                  href={item.link}
                >
                  Flats in {item.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="  flex flex-col gap-2 justify-start text-start">
            {cityName.map((item) => (
              <li className=" text-start">
                <a
                  className="  text-white opacity-60 text-start "
                  href={item.link}
                >
                  New Projects in {item.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="  flex flex-col gap-2 justify-start text-start">
            {cityName.map((item) => (
              <li className=" text-start">
                <a
                  className="  text-white opacity-60 text-start "
                  href={item.link}
                >
                  New Projects in {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Commercial Property in  */}
          <ul className="  flex flex-col gap-2 justify-start text-start">
            {cityName.map((item) => (
              <li className=" text-start">
                <a
                  className="  text-white opacity-60 text-start "
                  href={item.link}
                >
                  Commercial Property in {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* footer secetion second */}
      <secetion className="bg-black w-full p-9 pt-16 flex justify-around border-t-[0.5px] border-gray-500 gap-9 max-sm:flex max-sm:flex-col-reverse  ">
        {/* first part */}
        <div className=" first-Col max-sm:mx-auto">
          <img
            className=" w-72 mb-4 "
            src="https://c.housingcdn.com/demand/s/client/common/assets/housing.820bbe77.png"
            alt=""
          />
          <div className=" flex flex-col gap-4  ">
            <div className=" flex ">
              <img
                className=" w-52"
                src="https://c.housingcdn.com/demand/s/client/common/assets/gptweconomic.77c205dc.jpg"
                alt=""
              />
              <img
                className=" w-24"
                src="https://c.housingcdn.com/demand/s/client/common/assets/gptwLogo.473a42fa.png"
                alt=""
              />
            </div>

            <div className="follow flex flex-col justify-start text-start gap-2">
              <h3 className="  text-white text-sm opacity-90">Follow</h3>
              <ul className=" flex gap-3">
                <li>
                  <a href="">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/facebook.33841e8e.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/instagram.c83be51b.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/twitter.848ce579.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/linkedin.71fe1230.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img
                      src="https://c.housingcdn.com/demand/s/client/common/assets/youtube.d1b10a64.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>

              <h3 className="text-white text-sm opacity-90 mt-2">
                ©2012-24 Locon Solutions Pvt. Ltd
              </h3>
            </div>
          </div>
        </div>

        {/* second part */}
        <div className=" second-col flex justify-around gap-9">
          <div className=" text-start">
            <h2 className=" uppercase text-white font-semibold text-sm ">
              Company
            </h2>
            <ul className=" felx flex-col gap-9 justify-start  text-start ">
              {footerData.map((item) => (
                <li>
                  {" "}
                  <a
                    className=" text-white opacity-60 text-start text-sm "
                    href=""
                  >
                    {item.linkName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* third col */}
          <div className=" text-start">
            <h2 className=" uppercase text-white font-semibold text-sm ">
              PARTNER SITES
            </h2>
            <ul className=" felx flex-col gap-9 justify-start  text-start ">
              {ParterSite.map((item) => (
                <li>
                  {" "}
                  <a
                    className=" text-white opacity-60 text-start text-sm "
                    href=""
                  >
                    {item.linkName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* fourth col */}
          <div className=" text-start">
            <h2 className=" uppercase text-white font-semibold text-sm ">
              explore
            </h2>
            <ul className=" felx flex-col gap-9 justify-start  text-start ">
              {explore.map((item) => (
                <li>
                  {" "}
                  <a
                    className=" text-white opacity-60 text-start text-sm "
                    href=""
                  >
                    {item.linkName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </secetion>
    </div>
  );
}

export default FooterSecetion;
