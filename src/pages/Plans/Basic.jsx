import React from "react";
import Plantemplate from "../../components/Plan/Plantemplate.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";

function Basic() {
    const Data = [
      {
        heading: "What’s Included in the Basic Service?",
        subheadings: [
          {
            title: "Monthly NEPRA Compliance Assessment",
            text:
              "Our expert NEPRA compliance consultant will meet with your team once a month to assess your organization's current compliance status.",
          },
          {
            title: "Recommendations to Improve Compliance",
            text:
              "You’ll receive detailed recommendations tailored to your specific needs, including optional services to improve your cybersecurity posture.",
          },
          {
            title: "Artifact Creation for NEPRA Audits",
            text:
              "We’ll help you create essential artifacts and documentation that can be presented to NEPRA auditors, ensuring transparency and readiness during evaluations.",
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
        title={"Get Started on Your NEPRA Compliance"}
        discription={
          "At SPS, we understand the importance of staying ahead in cybersecurity and compliance. That’s why our Basic Service is designed to help power sector companies take the first step toward NEPRA Cybersecurity Compliance"
        }
      />
      <Plantemplate rightSectionheading={"Take the first step toward NEPRA compliance today."} plandata={Data}/>
    </>
  );
}

export default Basic;
