import React from "react";
import Plantemplate from "../../components/Plan/Plantemplate.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";

function Premium() {
  const Data = [
    {
      heading: "What’s Included in the Premium Service?",
      subheadings: [
        {
          title: "Bespoke Compliance Support",
          text:
            "Work with our team to design a customized compliance strategy tailored to your specific needs, challenges, and timelines.",
        },
        {
          title: "Dedicated Security Experts",
          text:
            "Collaborate with a team of cybersecurity experts who will work closely with your organization to address critical compliance areas, including:",
        },
        {
          listtitle: "Security Policy Management for IT and OT assets",
        },
        {
          listtitle: "Vulnerability Assessments and Risk Mitigation",
        },
        {
          listtitle: "Monitoring, Incident Response, and Reporting",
        },
        {
          title: "Flexible Engagements",
          text:
            "Choose how you want to work with us—whether it’s ongoing compliance support, focused improvement projects, or strategic advisory services.",
        },
       
      ],
      heading2: "How You Benefit:",
      subheadings2: [
          {
            listtitle2: "Get a clear understanding of your compliance status.",
          },
          {
              listtitle2: "Develop confidence in presenting compliance evidence to NEPRA auditors.",
            },
            {
              listtitle2: "Begin improving your security policies and controls with actionable insights.",
            },
        ],
    },
    
    

  ];
  return (
    <>
      <HeroSection
        Showcard={true}
        main={""}
        title={"Tailored Cybersecurity and Compliance Solutions for Your Business"}
        discription={
          "Every organization has unique needs and challenges. With our Premium Service, we offer a fully customized approach to NEPRA compliance, designed specifically for your priorities and requirements."
        }
      />
      <Plantemplate rightSectionheading={"Take the first step toward NEPRA compliance today. Our Basic Service is free—no strings attached."} plandata={Data}/>
    </>
  );
}

export default Premium;
