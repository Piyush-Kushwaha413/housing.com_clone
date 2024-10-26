import React from 'react'

function ArticalSecton({ArticalData}) {
  
  
  return (
    <section className=" h-[75vh] flex flex-col justify-evenly mt-40  max-sm:mt-0">
        {/* heading */}
        <div className=" flex gap-1 flex-col  w-[85vw] mx-auto text-start">
          <h2 className=" font-semibold text-4xl ">
            News & <span className=" font-bold"> Articles</span>{" "}
          </h2>
          <p className=" font-semibold  text-slate-600">
            Read what's happening in Real Estate
          </p>
        </div>

        <div className="  flex items-start gap-9 pt-3  w-[85vw] mx-auto  overflow-x-auto  scrollOff  ">
          {ArticalData.map((item) => (
            <div className=" flex flex-col justify-center gap-5 font-medium w-80  ">
              <div className=" imgs w-80   ">
                <img
                  src={item.imgScr}
                  alt=""
                  height="320px"
                  className=" rounded-xl w-80 "
                />
                <h2 className=" font-semibold text-start ">{item.title}</h2>

                <p className=" text-sm text-slate-500 text-start">
                  {item.desc}
                </p>
              </div>
              <div className=" flex justify-between border-t">
                <span className="text-sm text-slate-500 text-start">
                  {item.tag1}
                </span>
                <span className="text-sm text-slate-500 text-start">
                  {item.tag2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default ArticalSecton