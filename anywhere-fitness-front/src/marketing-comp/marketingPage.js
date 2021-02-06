import React from "react";
import { Element } from "react-scroll";

//!module imports
import MarketingHeader from "./marketing-header";
import Banner from "./banner";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Footer from "./Footer";

const MarketingPage = () => {
  return (
    <div>
      <MarketingHeader />
      <Banner />
      <Element id="howitworks" name="howitworks">
        <HowItWorks />
      </Element>
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default MarketingPage;
