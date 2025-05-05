import React from "react";
import "./HeroSection.css";
import "../../index.css";

function HeroSection({ main, title, discription}) {
  return (
    // <section className="banner-img banner-back mt-5">
    <section className="mt-5 container-fluid main-hero px-md-5">
      
      <div className="banner-img banner-back">
      <div className="container-fluid px-md-4 content">
        {/* <div className="row d-flex align-items-center"> */}
        <div >
            
        {/* <div className={Showdata ? "col-lg-10" : "col-lg-7"}> */}
        <div className="d-flex flex-column text-center py-md-5 px-md-5 align-items-center justify-content-center">
            {main && <h1>{main}</h1>}
            <h2>
              {title
                ? title
                : "Empowering the Power Sector to Comply with NEPRA Cyber Security Regulations."}
            </h2>
            <p className="text-center mx-md-4">
              {discription
                ? discription
                : `We safeguard Pakistan's power generation, transmission, and distribution sectors with expert
                        cybersecurity consulting and systems integration, ensuring compliance with NEPRA's
                        regulations.`}
            </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
