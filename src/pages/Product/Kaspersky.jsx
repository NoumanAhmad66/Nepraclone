import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProductTemplate from '../../components//Template/Products/ProductTemplate.jsx'
import logo from "../../assets/Product/Kas.png";
import logo2 from "../../assets/Product/Kasmid.png";


function Kaspersky() {
  const TopRow = [
    {
      heading: "Why Kaspersky for IT & OT Asset Assessment?",
      text:"Kaspersky provides robust cybersecurity solutions that cater specifically to the unique needs of the power sector. By utilizing Kaspersky’s products, you gain:",
      subheadings: [
        {
          title:"Comprehensive IT & OT Asset Protection",
          text: "Secure all interconnected systems, from IT infrastructure to operational technologies (OT), against cyberattacks.",
        },
        {
          title:"Proactive Threat Detection",
          text: "Advanced AI-driven tools to identify vulnerabilities before they can be exploited.",
        },
        {
          title:"Streamlined NEPRA Compliance",
          text: "Tailored tools that align with NEPRA’s regulatory standards to simplify compliance processes.",
        },
        {
          title:"24/7 Security Monitoring",
          text: "Continuous surveillance to ensure uptime and operational reliability.",
        },
        {
          title:"Industry-Specific Expertise",
          text: "Solutions designed for the critical needs of power generation, transmission, and distribution sectors.",
        },
      ], 
      image:logo,
      
    },
  ];
  const MidRow = [
    
    {
      listmidheading:"Kaspersky Solutions for IT & OT Security",
      listheading:"Kaspersky Industrial CyberSecurity (KICS)",
      subheadings: [
        {
          listtitle:"Protects critical industrial processes and monitors network activity for threats.",
        },
        {
          listtitle:"Integrates seamlessly with SCADA systems for efficient security management.",
        },
        {
          listheading:"Kaspersky Endpoint Security",
        },
        {
          listtitle:"Safeguards IT endpoints with advanced antivirus and data loss prevention.",
        },
        {
          listtitle:"Safeguards IT endpoints with advanced antivirus and data loss prevention.",
        },
      ], 
      
      imagemid:logo2,

      listheading1:"Kaspersky Threat Intelligence Platform",
      subheadings1: [
        {
          listtitle1:"Provides actionable insights and comprehensive threat analysis to improve decision-making.",
          
        },
        {
            listtitle1:"Keeps organizations ahead of emerging cyber threats.",
        },
        {
          listheading1:"Kaspersky Security Awareness",
        },
        {
          listtitle1:"Trains employees to identify and respond effectively to cyber threats.",
          
        },
        {
          listtitle1:"Reduces human errors while fostering a cybersecurity-conscious culture.",
          
        },
      ],
    },
  ];
  const BottomRow = [
    {
      heading:"How We Support NEPRA Compliance",
      subheadings: [
        {
          title:"IT & OT Asset Inventory:",
          text:"Comprehensive identification and documentation of all assets.",
        },
        {
          title:"Risk Assessments:",
          text:"Evaluate vulnerabilities in alignment with NEPRA guidelines.",
        },
        {
          title:"Implementation of Security Controls:",
          text:"Deploy measures to secure assets as required by NEPRA standards.",
        },
        {
          title:"Incident Response Planning:",
          text:"Prepare for swift action in case of a breach.",
        },
        {
          title:"Regular Compliance Reporting:",
          text:"Stay audit-ready with detailed compliance documentation.",
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

export default Kaspersky;