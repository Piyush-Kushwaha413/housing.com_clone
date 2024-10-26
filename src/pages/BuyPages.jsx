import React from 'react'
import FooterSecetion from "../Componentes/footer/footerSecetion";
import EgdeSection from "../Componentes/EgdeSection";
import RecentlySection from "../Componentes/RecentlySection";
import TopSection from "../Componentes/TopSection";
import FeaturedSection from "../Componentes/FeaturedSection";
import PosterSection from "../Componentes/PosterSection";
import ArticalSecton from "../Componentes/ArticalSecton";
import  Recommended  from "../Componentes/Recommended";
import { 
  BuysData,
    laptopStatus,
  } from "../DataComponent/Data";
  
function BuyPages({pageData,...props}) {
    console.log(laptopStatus)
    console.log(props);
    
    return (
        <div className="main_front_page w-screen">
          {/* Hero Section */}
         
          <TopSection data={pageData.topData} ></TopSection>
          {/* section  edge */}
          <EgdeSection></EgdeSection>
          {/* secetion  Recently Added*/}
          <RecentlySection recentlyData={pageData.buyFlatData}></RecentlySection>
          {/* Featured Collections */}
         <FeaturedSection FeaturedData={pageData.buyFeastureCollection}></FeaturedSection>
    
          {/* Recommended Sellers */}
          <Recommended ></Recommended>
    
          {/* poster section  */}
          <PosterSection></PosterSection>
    
          {/* Artical section   */}
          <ArticalSecton ArticalData={pageData.buyArticalData}></ArticalSecton>
    
          {/* footer section */}
          <FooterSecetion></FooterSecetion>
    
        </div>
      );
}

export default BuyPages