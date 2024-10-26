import React from 'react'
import FooterSecetion from "../Componentes/footer/footerSecetion";
import EgdeSection from "../Componentes/EgdeSection";
import RecentlySection from "../Componentes/RecentlySection";
import TopSection from "../Componentes/TopSection";
import FeaturedSection from "../Componentes/FeaturedSection";
import PosterSection from "../Componentes/PosterSection";
import ArticalSecton from "../Componentes/ArticalSecton";
import  Recommended  from "../Componentes/Recommended";
import RecentlyAdded from "../Componentes/RecentlyAdded";


function CommercialPage({pageData}) {
  // console.log(pageData);
  return (
    <div className="main_front_page w-screen">
    {/* Hero Section */}
    <TopSection data={pageData.topData}></TopSection>

    {/* Recently added for Sale */}
     <RecentlyAdded data={pageData.commercialForSale} />

    {/* Recently added for Rent */}
      <RecentlyAdded data={pageData.commercialForRent}/>

    {/* section  edge */}
    <EgdeSection></EgdeSection>

    {/* Housing Experts */}
    <></>

    {/* poster section  */}
    <PosterSection></PosterSection>

    {/* Artical section   */}
    <ArticalSecton ArticalData={pageData.commercialArticles} ></ArticalSecton>

    {/* footer section */}
    <FooterSecetion></FooterSecetion>

  </div>
   
  )
}

export default CommercialPage