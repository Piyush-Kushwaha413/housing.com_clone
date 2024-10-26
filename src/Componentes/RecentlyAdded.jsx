import React from 'react'

function RecentlyAdded({data}) {
    console.log(data);
  return (
    <section className=" h-[57vh] flex flex-col justify-center gap-4  max-sm:h-auto max-sm:mt-12  max-sm:gap-2 ">
    {/* heading */}
    <div className=" flex gap-1 flex-col  w-[85vw] mx-auto text-start ">
      <h2 className=" text-3xl   max-sm:text-2xl  ">
      Recently Added Properties  <span className=" font-bold ">{data.heading}</span>
      </h2>
   </div>

     <div className="  flex items-start gap-9 pt-3  w-[85vw] mx-auto overflow-x-auto  ">
      {data.cardData.map((item) => (
        <div className=" flex font-medium gap-2 w-80 h-40 border-[1.4px] border-gray-200 rounded hover:shadow-2xl max-sm:w-72  ">
          {/*  img*/}
          <div className=" w-32 m-1  ">
            <img
              src={item.img}
              alt=""
              className=" w-full h-full object-cover  "
            />
            
          </div>
          {/* descriptions */}
          <div className=" flex flex-col justify-evenly w-52 text-start">
            <div className='titleDiv'>
                <h2 className=' font-semibold text-[15px]'>{item.title}</h2>
                <p className=' text-xs opacity-70'>{item.desc1}</p>
            </div>
            <div className=' tagDiv flex flex-col '>
                <span className=' tag1 text-sm opacity-85'>{item.tag1}</span>
                <span className=' tag2 text-xs opacity-70'>{item.desc2}</span>

            </div>
            <div>
                <h3 className='PriceTag  font-semibold text-[15px]'>₹{item.priceTag}</h3>
            </div>

          </div>
        </div>

       
       ))} 
    </div> 
  </section>
  )
}

export default RecentlyAdded
