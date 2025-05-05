import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProductTemplate from '../../components//Template/Products/ProductTemplate.jsx'
import logo from "../../assets/Product/microsoft1.png";
import logo2 from "../../assets/Product/microsoft2.png";


function Microsoft() {
    const TopRow = [
        {
          heading: "Why Microsoft for IT & OT Security?",
          text:"Microsoft provides a comprehensive ecosystem of tools and platforms tailored to meet the security needs of the power sector. By choosing Microsoft, you gain:",
          subheadings: [
            {
              title:"Scalable Cloud Solutions",
              text: "Protect both IT and OT environments with an integrated security approach.",
            },
            {
              title:"Streamline Compliance",
              text: "Utilize Microsoft Azure to ensure resilience and scalability.",
            },
            {
              title:"Advanced Threat Detection",
              text: "AI-driven tools for real-time threat detection and response.",
            },
            {
              title:"Simplified Compliance Management",
              text: "Built-in tools to streamline compliance with NEPRA standards.",
            },
            {
              title:"Seamless Integration",
              text: "Interoperability with existing infrastructure for smooth operations.",
            },
          ], 
          image:logo,
          
        },
      ];
      const MidRow = [
        
        {
          listmidheading:"Microsoft Solutions for IT & OT Asset Security",
          listheading:"Microsoft Azure",
          subheadings: [
            {
              listtitle:"Secure cloud infrastructure with advanced analytics and AI for proactive risk management. Ensures high availability, disaster recovery, and robust support for IT and OT environments.",
            },
            {
              listtitle:"Ensures high availability, disaster recovery, and robust support for IT and OT environments.",
            },
            {
              listheading:"Microsoft Defender for IoT",
            },
            {
              listtitle:"Specialized protection for OT and IoT environments with continuous asset discovery.",
            },
            {
              listtitle:"Integrates with SIEM systems for centralized real-time threat monitoring.",
            },
          ], 
          
          imagemid:logo2,
          imgbottomheading:"Microsoft Purview Compliance Manager",
          imgbottomsubheadings1:
          [ 
              {
                imgbottomtitle1:"Simplifies compliance with tools for assessments, tracking, and reporting.",
              },
              {
                imgbottomtitle1:"Provides actionable insights to align with regulatory standards like NEPRA.",
              },
          ],
          
    
          listheading1:"Microsoft Sentinel",
          subheadings1: [
            {
              listtitle1:"Cloud-native SIEM and SOAR platform with intelligent security analytics..",
              
            },
            {
                listtitle1:"Enables rapid incident response through automation and threat intelligence.",
            },
            {
                listheading1:"Microsoft 365 Security",
              },
            {
                listtitle1:"Protects email, documents, and identities while enabling secure collaboration.",
            },
            {
              listtitle1:"Enhances security awareness through training and advanced threat insights.",
              
            },
          ],
        },
      ];
      const BottomRow = [
        {
          heading:"How We Support NEPRA Compliance",
          
          subheadings: [
            {
              title:"Comprehensive Asset Discovery:",
              text:"Identify and catalog all IT and OT assets.",
            },
            {
              title:"Proactive Risk Management:",
              text:"Detect vulnerabilities and mitigate risks efficiently.",
            },
            {
              title:"Security Controls Implementation:",
              text:"Deploy measures aligned with NEPRA’s standards.",
            },
            {
              title:"Incident Response Planning:",
              text:"Utilize Microsoft tools for rapid breach response.",
            },
            {
              title:"Automated Compliance Reporting:",
              text:" Stay audit-ready with Microsoft’s compliance tools.",
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
    main={"NEPRA Compliance as a Service: Powered by Microsoft"}
    title={"Empowering IT & OT Asset Security in the Power Sector"}
    discription={"Achieve NEPRA compliance with confidence by leveraging Microsoft’s advanced cloud and security solutions. Our service integrates Microsoft’s cutting-edge technologies to safeguard IT and OT assets, ensuring seamless regulatory compliance for power sector organizations."} 
    />
    <ProductTemplate rows={TopRow} rowmid={MidRow} rowlast={BottomRow}/>

    
    </>
  )
}

export default Microsoft