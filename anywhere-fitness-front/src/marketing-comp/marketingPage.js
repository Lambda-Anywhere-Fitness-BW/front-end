import React from "react";

//!module imports
import MarketingHeader from "./marketing-header";
import Banner from "./banner";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import FAQ from './FAQ'
import Footer from './Footer';

const MarketingPage = () => {
  return (
    <div>
      <MarketingHeader />
      <Banner />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default MarketingPage;
