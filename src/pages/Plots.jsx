import React from 'react'
import FooterSecetion from "../Componentes/footer/footerSecetion";
import EgdeSection from "../Componentes/EgdeSection";
import RecentlySection from "../Componentes/RecentlySection";
import TopSection from "../Componentes/TopSection";
import FeaturedSection from "../Componentes/FeaturedSection";
import PosterSection from "../Componentes/PosterSection";
import ArticalSecton from "../Componentes/ArticalSecton";
import  Recommended  from "../Componentes/Recommended";

function Plots({pageData}) {
  return (
    <div className="main_front_page w-screen">
    {/* Hero Section */}
    <TopSection data={pageData.topData}></TopSection>
    {/* section  edge */}
    <EgdeSection></EgdeSection>
    

    {/* footer section */}
    <FooterSecetion></FooterSecetion>

  </div>
  )
}

export default Plots