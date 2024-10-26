import React from "react";
import FooterSecetion from "./footer/footerSecetion";
import EgdeSection from "./EgdeSection";
import RecentlySection from "./RecentlySection";
import TopSection from "./TopSection";
import FeaturedSection from "./FeaturedSection";
import PosterSection from "./PosterSection";
import ArticalSecton from "./ArticalSecton";
import { 
  laptopStatus,
} from "../DataComponent/Data";


function Hero() {  
  console.log(laptopStatus)
  const pro_icon =
    "https://c.housingcdn.com/demand/s/client/common/assets/expertProBadge.3a03f554.svg";
  const non_pro_icon =
    "https://c.housingcdn.com/demand/s/client/common/assets/localityChamp.1904ec17.png";

  return (
    <div className="main_front_page w-screen">
      {/* Hero Section */}
      <TopSection></TopSection>
      {/* section  edge */}
      <EgdeSection></EgdeSection>
      {/* secetion  Recently Added*/}
      <RecentlySection></RecentlySection>
      {/* Featured Collections */}
     <FeaturedSection></FeaturedSection>

      {/* Recommended Sellers */}
      <RecentlySection></RecentlySection>

      {/* poster section  */}
      <PosterSection></PosterSection>

      {/* Artical section   */}
      <ArticalSecton></ArticalSecton>

      {/* footer section */}
      <FooterSecetion></FooterSecetion>

    </div>
  );
}

export default Hero;
