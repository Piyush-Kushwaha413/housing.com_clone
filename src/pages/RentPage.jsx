import React from 'react'
import FooterSecetion from "../Componentes/footer/footerSecetion";
import EgdeSection from "../Componentes/EgdeSection";
import RecentlySection from "../Componentes/RecentlySection";
import TopSection from "../Componentes/TopSection";
import FeaturedSection from "../Componentes/FeaturedSection";
import PosterSection from "../Componentes/PosterSection";
import ArticalSecton from "../Componentes/ArticalSecton";
import  Recommended  from "../Componentes/Recommended";

function RentPage({pageData}) {
  console.log(pageData);
  return (
    <div className="main_front_page w-screen">
          {/* Hero Section */}
          <TopSection data={pageData.topData}></TopSection>
         
          {/* section  edge */}
          <EgdeSection></EgdeSection>
         
          {/* secetion  Recently Added*/}
          <RecentlySection recentlyData={pageData.rentFlatsData}></RecentlySection>
         
          {/* Featured Collections */}
          <FeaturedSection FeaturedData={pageData.rentFeastureCollection}></FeaturedSection>
    
          {/* Recommended Sellers */}
          <Recommended></Recommended>
    
          {/* poster section  */}
          <PosterSection></PosterSection>
    
          {/* Artical section   */}
          <ArticalSecton ArticalData={pageData.rentArticles} ></ArticalSecton>
    
          {/* footer section */}
          <FooterSecetion></FooterSecetion>
    
        </div>
    
  )
}

export default RentPage