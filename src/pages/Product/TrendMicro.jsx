import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProductTemplate from '../../components//Template/Products/ProductTemplate.jsx'
import logo from "../../assets/Product/tm1.png";
import logo2 from "../../assets/Product/tm2.png";



function TrendMicro() {   const TopRow = [
    {
      heading: "Why Trend Micro for IT & OT Security?",
      text:"Trend Micro offers innovative solutions tailored to meet the dynamic security needs of the power sector. With Trend Micro, you can:",
      subheadings: [
        {
          title:"Secure IT & OT Environments",
          text: "Comprehensive protection against cyber threats.",
        },
        {
          title:"Achieve NEPRA Compliance",
          text: "Align your systems with regulatory standards.",
        },
        {
          title:"Gain Threat Intelligence",
          text: "Leverage AI-powered insights for proactive defense.",
        },
        {
          title:"Streamline Security Management",
          text: "Unified solutions for simplified operations.",
        },
        {
          title:"Ensure Business Continuity",
          text: "Minimize disruptions with advanced threat detection.",
        },
      ], 
      image:logo,
      
    },
  ];
  const MidRow = [
    
    {
      listmidheading:"Trend Micro Solutions for IT & OT Asset Security",
      listheading:"Trend Micro Apex One",
      subheadings: [
        {
          listtitle:"All-in-one endpoint security for IT and OT devices.",
        },
        {
          listtitle:"Automated detection and response against malware, ransomware, and advanced threats.",
        },
        {
          listheading:"Trend Micro Deep Security",
        },
        {
          listtitle:"Comprehensive server protection for physical, virtual, and cloud environments.",
        },
        {
          listtitle:"Advanced intrusion prevention for critical OT systems.",
        },
      ], 
      
      imagemid:logo2,

      listheading1:"Trend Micro Vision One",
      subheadings1: [
        {
          listtitle1:"Cross-layered detection and response (XDR) for holistic threat analysis.",
          
        },
        {
            listtitle1:"Cross-layered detection and response (XDR) for holistic threat analysis.",
        },
        {
          listheading1:"Trend Micro TippingPoint",
        },
        {
          listtitle1:"Next-generation intrusion prevention system (IPS) with real-time, in-line protection.",
          
        },
        {
          listtitle1:"Shields vulnerabilities and blocks advanced threats for IT and OT networks.",
          
        },
      ],
    },
  ];
  const BottomRow = [
    {
      heading:"How Trend Micro Support NEPRA Compliance",
      textbottom:"Our NEPRA Compliance as a Service leverages Trend Micro’s technologies to deliver:",
      subheadings: [
        {
          title:"Comprehensive Asset Protection:",
          text:"Safeguard IT and OT assets from cyber threats.",
        },
        {
          title:"Vulnerability Management:",
          text:"Identify and remediate vulnerabilities promptly.",
        },
        {
          title:"Incident Detection and Response:",
          text:"Respond to threats with agility and precision.",
        },
        {
          title:"Automated Compliance Reporting:",
          text:"Simplify NEPRA audit processes with pre-configured tools.",
        },
        {
          title:"Integrated Security Measures:",
          text:" Deploy solutions aligned with regulatory requirements.",
        },
      ], 
      heading1:"Who Can Benefit?",
      textbottom1:"This service is ideal for:",
      subheadings1: [
        {
          title1: "Power Generation Companies",
        },
        {
          title1: "Transmission Network Operators",
        },
        {
          title1: "Distribution Companies",
        },
        {
          title1: "Independent Power Producers (IPPs)",
        },
      ], 
    }
  ]
  return (
    <>
    <HeroSection
    Showdata={true}
    main={"NEPRA Compliance as Service: Powered by Trend Micro"}
    title={"Enhancing IT & OT Security in the Power Sector"}
    discription={"Ensure NEPRA compliance while protecting your critical infrastructure with Trend Micro’s cutting-edge cybersecurity solutions. Our service integrates Trend Micro technologies to deliver seamless protection for IT and OT environments."} 
    />
    <ProductTemplate rows={TopRow} rowmid={MidRow} rowlast={BottomRow}/>
    
    </>
  )
}

export default TrendMicro