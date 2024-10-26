import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Hero,
  BuyPages,
  RentPage,
  CommercialPage,
  ColivingPage,
  Plots,
} from "../import";
import {
  rentPageData,
  BuysData,
  CoLivingData,
  CommercialData,
  PlotsData,
} from "../DataComponent/Data";

function RoutersPage() {
  return (
    <Routes>
      <Route path="/" element={<BuyPages pageData={BuysData} />} />
      <Route path="/buys" element={<BuyPages pageData={BuysData} />} />
      <Route
        path="/rent"
        element={<RentPage pageData={rentPageData}></RentPage>}
      />
      <Route path="/commercial" element={<CommercialPage pageData={CommercialData} ></CommercialPage>} />
      <Route path="/Coliving" element={<ColivingPage pageData={CoLivingData} />} />
      <Route path="/plots" element={<Plots pageData={PlotsData}></Plots>} />
      <Route path="*" element={<div>Error: Page not Found "400"</div>} />
    </Routes>
  );
}

export default RoutersPage;
