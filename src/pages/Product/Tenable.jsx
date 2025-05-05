import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProductTemplate from '../../components//Template/Products/ProductTemplate.jsx'
import logo from "../../assets/Product/tenable1.png";
import logo2 from "../../assets/Product/tenable2.jpg";


function Tenable() {
    const TopRow = [
        {
          heading: "Why Tenable for IT & OT Security?",
          text:"Tenable’s solutions are designed to provide unparalleled visibility and control over your IT and OT environments, enabling organizations in the power sector to:",
          subheadings: [
            {
              title:"Identify Vulnerabilities Proactively",
              text: "Discover, assess, and remediate vulnerabilities across all environments.",
            },
            {
              title:"Streamline Compliance",
              text: "Simplify NEPRA compliance with tools that map directly to regulatory frameworks.",
            },
            {
              title:"Mitigate Cyber Risks",
              text: "Prioritize remediation efforts based on risk to your critical assets.",
            },
            {
              title:"Ensure Operational Continuity",
              text: "Protect IT and OT systems against threats without disrupting operations.",
            },
            {
              title:"Gain Unified Visibility",
              text: "Monitor all assets—from IT endpoints to OT systems—in a single pane of glass.",
            },
          ], 
          image:logo,
          
        },
      ];
      const MidRow = [
        
        {
          listmidheading:"Tenable Solutions for IT & OT Asset Security",
          listheading:"Tenable.ot",
          subheadings: [
            {
              listtitle:"Real-time monitoring and anomaly detection for OT environments with comprehensive asset inventory.",
            },
            {
              listtitle:"Protects critical infrastructure through detailed risk assessments.",
            },
            {
              listheading:"Tenable.io",
            },
            {
              listtitle:"Cloud-based vulnerability management with continuous visibility across IT assets.",
            },
            {
              listtitle:"Automates compliance reporting to streamline security processes.",
            },
          ], 
          
          imagemid:logo2,
    
          listheading1:"Tenable.sc",
          subheadings1: [
            {
              listtitle1:"On-premises vulnerability management with integration into existing workflows.",
              
            },
            {
                listtitle1:"Prioritizes risk mitigation with actionable insights.",
            },
            {
              listheading1:"Tenable Lumin",
            },
            {
              listtitle1:"Provides cyber exposure scoring to quantify and prioritize risk.",
              
            },
            {
              listtitle1:"Aligns risk metrics with business objectives for informed decision-making.",
              
            },
          ],
        },
      ];
      const BottomRow = [
        {
          heading:"How We Support NEPRA Compliance",
          textbottom:"Our NEPRA Compliance as a Service leverages Tenable’s capabilities to deliver:",
          subheadings: [
            {
              title:"Comprehensive Asset Inventory:",
              text:"Identify and document all IT and OT assets",
            },
            {
              title:"Risk-Based Vulnerability Management:",
              text:"Assess and prioritize vulnerabilities based on their risk impact.",
            },
            {
              title:"Implementation of Security Controls:",
              text:"Apply security measures that align with NEPRA standards.",
            },
            {
              title:"Incident Detection and Response:",
              text:" Identify and address incidents in real-time.",
            },
            {
              title:"Regular Compliance Reporting:",
              text:"Maintain audit readiness with automated reporting tools.",
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
    main={"NEPRA Compliance as a Service: Powered by Tenable"}
    title={"Enhancing IT & OT Security in the Power Sector"}
    discription={"Achieve NEPRA compliance with our specialized service leveraging Tenable’s advanced cybersecurity solutions. Secure your IT and OT assets and ensure regulatory adherence with proactive vulnerability management and real-time monitoring."} 
    />
    <ProductTemplate rows={TopRow} rowmid={MidRow} rowlast={BottomRow}/>
    
    </>
  )
}

export default Tenable;