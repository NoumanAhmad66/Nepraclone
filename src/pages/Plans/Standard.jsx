import React from "react";
import Plantemplate from "../../components/Plan/Plantemplate.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";

function Standard() {
  const Data = [
    {
      heading: "What’s Included in the Standard Service?",
      subheadings: [
        {
          title: "Weekly Compliance Sessions",
          text:
            "Our NEPRA compliance consultant will meet with your team four times a month to review progress, address challenges, and guide you toward compliance.",
        },
        {
          title: "Detailed Compliance Roadmaps",
          text:
            "Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks.",
        },
        {
          title: "Artifact and Documentation Support",
          text:
            "We'll work with you to maintain detailed, audit-ready documentation to demonstrate compliance.",
        },
        {
          title: "Enhanced Advisory Services",
          text:
            "Get additional insights and advice on:",
        },
        {
          listtitle: "Security Policy Management",
        },
        {
          listtitle: "Risk and Vulnerability Assessments",
        },
        {
          listtitle: "Awareness and Training",
        },
      ],
      heading2: "How You Benefit:",
      subheadings2: [
          {
            listtitle2: "Stay on top of compliance with regular, dedicated support.",
          },
          {
              listtitle2: "Minimize risk with improved IT and OT security controls.",
            },
            {
              listtitle2: "Build a strong cybersecurity framework for audits and beyond..",
            },
        ],
    },
    
    

  ];
  return (
    <>
      <HeroSection
        Showcard={true}
        main={""}
        title={"Stay on Track with Proactive Compliance Support"}
        discription={
          "Our Standard Service is designed for organizations that require consistent, hands-on support to achieve and maintain NEPRA cybersecurity compliance."
        }
      />
      <Plantemplate rightSectionheading={"Take control of your NEPRA compliance journey with regular, proactive support."} plandata={Data}/>
    </>
  );
}

export default Standard;
