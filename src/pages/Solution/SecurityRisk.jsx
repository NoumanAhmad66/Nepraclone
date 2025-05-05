import React from "react";
import Solutiontemplate2 from "../../components/Template/Solutions/Solutiontemplate2";
import HeroSection from "../../components/HeroSection/HeroSection";
import logo from "../../assets/Solution/img2.png";
import logo2 from "../../assets/Solution/img21.png";

function SecurityRisk() {   

  const page1Rows = [
    {
      heading: "Why It Matters",
      subheadings: [
        {
          text: "Cybersecurity is only as strong as its weakest link. Unidentified vulnerabilities can lead to breaches, financial losses, and regulatory penalties. Our service ensures your organization is proactive in identifying and mitigating risks before they can be exploited.",
        },
      ], 
      image:logo,
      
    },
    {
      heading: "Key Features",
      subheadings: [
        {
          title: "Comprehensive Risk Assessment",
          text: "Identify and evaluate potential risks across IT and OT environments. Prioritize risks based on their potential impact and likelihood.",
        },
        {
          title: "Vulnerability Scanning",
          text: "Automated and manual scans to uncover weaknesses in your systems, applications, and network infrastructure. Detailed reporting of vulnerabilities with severity ratings.",
        },
        {
          title: "Regulatory Compliance Check",
          text: "Ensure alignment with industry regulations like NEPRA, NIST, and ISO 27001. Highlight non-compliance risks and recommend remediation steps.",
        },
        {
          title: "Customized Action Plans",
          text: "Tailored mitigation strategies to address identified risks and vulnerabilities. Practical, scalable solutions aligned with your organization’s objectives.",
        },
        {
          title: "Continuous Monitoring Options",
          text: "Optional ongoing assessments to stay ahead of evolving threats.",
        },
      ],
      heading1: "Benefits",
    subheadings1: [
      {
        title1: "Enhanced Security Posture",
        text1: "Gain a clear understanding of your security weaknesses and address them effectively.",
      },
      {
        title1: "Regulatory Readiness",
        text1: "Ensure compliance with NEPRA and other industry standards to avoid penalties.",
      },
      {
        title1: "Cost-Effective Risk Management",
        text1: "Prioritize investments by addressing the most critical vulnerabilities first.",
      },
      {
        title1: "Proactive Threat Mitigation",
        text1: "Minimize the risk of breaches with timely identification and resolution of vulnerabilities.",
      },
      {
        title1: "Tailored Recommendations",
        text1: "Receive practical, actionable insights specific to your organization’s infrastructure.",
      },
    ],
  },
  {
    heading: "How It Works",
    subheadings: [
      {
        title: "Initial Engagement",
        text: "Detailed consultation to understand your organization’s security environment and goals.",
      },
      {
        title: "Assessment Phase",
        text: "Conduct risk assessments and vulnerability scans across IT and OT assets. Analyze data to identify security gaps and risk levels.",
      },
      {
        title: "Report Delivery",
        text: "Provide a detailed report with identified vulnerabilities, risk levels, and recommendations. Include visual insights and compliance checklists.",
      },
      {
        title: "Remediation Planning",
        text: "Work with your team to prioritize and plan mitigation actions. Provide guidance for implementing solutions.",
      },
      {
        title: "Optional Follow-Up",
        text: "Periodic reassessments and updates to maintain an optimal security posture.",
      },
    ],
    image:logo2,
  },
  ];
  
  const lastRow =[
    {
      listheading:"Our Expertise",
      subheadings: [
        {
          listtitle: "With years of experience serving the power sector, we specialize in helping organizations protect critical IT and OT assets while ensuring compliance with NEPRA regulations. Our team combines cutting-edge tools with in-depth industry knowledge to deliver reliable and actionable results.",
        },
      ], 
      listheading1:"Who Can Benefit?",
      subheadings1: [
        {
          listmain1:"Industry Expertise: ",
          listtitle1: "Power sector organizations requiring NEPRA compliance.",
        },
        {
          listtitle1: "Businesses seeking to identify and address cybersecurity gaps.",
        },
        {
          listtitle1: "Companies aiming to strengthen their security posture proactively.",
        },
      ], 
      listheading2:"Secure Your Organization Today",
      subheadings2: [
        {
          listtitle2: "Don’t wait for a breach to highlight your vulnerabilities. Take a proactive step with our Security Risk and Vulnerability.",
        },
      ], 
    },
  ];
  
  return (<><HeroSection
    Showdata={true}
    main={""}
    title={"Security Risk and Vulnerability Assessment as a Service"}
    discription={"In a world of growing cyber threats and regulatory scrutiny, understanding and addressing vulnerabilities in your IT and OT environments is vital. Our Security Risk and Vulnerability Assessment as a Service provides a comprehensive evaluation of your organization’s security posture, identifying gaps and offering actionable insights to fortify your defenses."}/>

  <Solutiontemplate2 rows={page1Rows} rowlast={lastRow} />
  </>)
  
}

export default SecurityRisk
