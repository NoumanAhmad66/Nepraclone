import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProductTemplate from '../../components//Template/Products/ProductTemplate.jsx'
import logo from "../../assets/Product/fortinet1.png";
import logo2 from "../../assets/Product/fotinet2.jpg";


function Fortinet() {
    const TopRow = [
        {
          heading: "Why Choose Fortinet for IT & OT Security?",
          text:"Fortinet's advanced security solutions are designed to address the unique challenges faced by the power sector. By integrating Fortinet technologies, you can:",
          subheadings: [
            {
              title:"Achieve Comprehensive Asset Protection",
              text: "Fortify both IT and OT systems against cyber threats.",
            },
            {
              title:"Enhance Visibility",
              text: "Gain real-time monitoring and control over critical assets.",
            },
            {
              title:"Streamline Compliance",
              text: "Utilize tools and reports tailored to NEPRA standards.",
            },
            {
              title:"Mitigate Advanced Threats",
              text: "Stay ahead with proactive threat detection.",
            },
            {
              title:"Simplify Management",
              text: "Centralized security management for ease of operations.",
            },
          ], 
          image:logo,
          
        },
      ];
      const MidRow = [
        
        {
          listmidheading:"Fortinet Solutions for IT & OT Asset Security",
          listheading:"FortiGate NGFW (Next-Generation Firewall)",
          subheadings: [
            {
              listtitle:"Advanced firewall for IT and OT environments with integrated IPS and secure segmentation.",
            },
            {
              listtitle:"Delivers scalable protection against modern cyber threats.",
            },
            {
              listheading:"FortiNAC (Network Access Control)",
            },
            {
              listtitle:"Ensures secure access with complete visibility into IT and OT devices.",
            },
            {
              listtitle:"Automates responses to unauthorized access attempts.",
            },
          ], 
          
          imagemid:logo2,
          
    
          listheading1:"FortiSIEM (Security Information and Event Management)",
          subheadings1: [
            {
              listtitle1:"FortiSIEM (Security Information and Event Management)",
              
            },
            {
                listtitle1:"Simplifies compliance reporting with NEPRA standards.",
            },
            {
                listheading1:"FortiEDR (Endpoint Detection and Response)",
              },
            {
                listtitle1:"Continuous monitoring and real-time remediation for IT and OT endpoints.",
            },
            {
              listtitle1:"Protects business continuity with minimal disruptions.",
              
            },
          ],
        },
      ];
      const BottomRow = [
        {
          heading:"How Fortinet Supports NEPRA Compliance",
          textbottom:"Our NEPRA Compliance as a Service harnesses Fortinet's technologies to:",
          
          subheadings: [
            {
              title:"Monitor All IT and OT Assets:",
              text:"Gain complete visibility and control.",
            },
            {
              title:"Detect and Mitigate Vulnerabilities:",
              text:"Address risks proactively.",
            },
            {
              title:"Implement Security Controls:",
              text:"Align with NEPRA’s regulatory standards.",
            },
            {
              title:"Respond to Incidents Rapidly:",
              text:"Leverage real-time threat intelligence.",
            },
            {
              title:"Simplify Audit Processes: ",
              text:"Generate automated reports for NEPRA compliance.",
            },
          ], 
          heading1:"Who Can Benefit?",
          textbottom1:"This service is tailored for:",
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
    main={"NEPRA Compliance as a Service: Powered by Kaspersky"}
    title={"Empowering IT & OT Asset Security in the Power Sector"}
    discription={"Achieve NEPRA compliance effortlessly with our specialized service leveraging Kaspersky’s cutting-edge solutions. Ensure comprehensive protection and assessment for your IT and OT assets, safeguarding your critical power sector operations from evolving cyber threats."} 
    />
    <ProductTemplate rows={TopRow} rowmid={MidRow} rowlast={BottomRow}/>
    </>
  )
}

export default Fortinet