import React from 'react'
import Backgroud from "../UtilityComponent/backgroud";
function PosterSection() {
  return (
    <section className="h-[75vh] relative max-sm:h-[400px] max-sm:overflow-hidden ">
        <Backgroud></Backgroud>
        <img
          src="https://c.housingcdn.com/demand/s/client/common/assets/gptw.15fcffaa.jpg"
          alt=""
          className=" center_containt absolute w-[70%] hover: hover_showdow  max-sm:top-[30%] max-sm:w-[90%] "
        />
      </section>
  )
}

export default PosterSection