import React from "react";
import Solutiontemplate2 from "../../components/Template/Solutions/Solutiontemplate2";
import HeroSection from "../../components/HeroSection/HeroSection";
import logo from "../../assets/Solution/img3.png";
import logo2 from "../../assets/Solution/img31.webp";

function SecurityControl() {   

  const page1Rows = [
    {
      heading: "Why This Service Matters",
      subheadings: [
        {
          text: "Security controls form the foundation of a resilient cybersecurity strategy. Inefficient or outdated controls expose organizations to risks, including data breaches, operational downtime, and regulatory penalties. With our service, you can strengthen your defenses, enhance compliance, and mitigate risks through expert-led implementation and continuous improvement.",
        },
      ], 
      image:logo,
      
    },
    {
      heading: "Key Features",
      subheadings: [
        {
          title: "Customized Security Control Framework",
          text: "Tailored to your organization’s unique risk profile and operational requirements, ensuring optimal protection and regulatory compliance.",
        },
        {
          title: "End-to-End Implementation",
          text: "From gap analysis to deployment, we manage the entire lifecycle of security control implementation for IT and OT environments.",
        },
        {
          title: "Continuous Monitoring and Improvement",
          text: "Regular assessments and updates to ensure controls remain effective against emerging threats and changes in the regulatory landscape.",
        },
        {
          title: "Compliance Alignment",
          text: "Designed to meet NEPRA requirements and other industry standards such as NIST, ISO 27001, and IEC 62443.",
        },
        {
          title: "Incident-Driven Enhancements",
          text: "Rapid response to incidents with focused improvements to affected controls.",
        },
      ],
      heading1: "Benefits",
    subheadings1: [
      {
        title1: "Enhanced Security Posture",
        text1: "Strengthen your organization’s defenses with a robust and adaptive control framework.",
      },
      {
        title1: "Proactive Threat Mitigation",
        text1: "Stay ahead of cyber threats with continuously evolving security measures.",
      },
      {
        title1: "Regulatory Compliance",
        text1: "Meet NEPRA and other relevant compliance standards with ease.",
      },
      {
        title1: "Operational Efficiency",
        text1: "Reduce the administrative burden of managing security controls with our expert support.",
      },
      {
        title1: "Scalability",
        text1: "Flexible solutions designed to grow with your organization’s needs.",
      },
    ],
  },{
    heading: "How It Works",
      subheadings: [
        {
          title: "Initial Assessment",
          text: "Comprehensive evaluation of existing security controls and identification of gaps. Risk assessment tailored to your IT and OT environments.",
        },
        {
          title: "Design and Planning",
          text: "Development of a strategic plan to implement and enhance security controls. Prioritization based on risk level, regulatory requirements, and organizational goals.",
        },
        {
          title: "Implementation",
          text: "Deployment of controls across IT and OT assets with minimal disruption. Training for internal teams to ensure proper usage and maintenance.",
        },
        {
          title: "Ongoing Monitoring and Refinement",
          text: "Continuous evaluation and improvement of controls to adapt to new threats and operational changes. Periodic compliance audits and updates.",
        },
        
      ],
      image:logo2,
  },
  ];
const lastRow=[{
  listheading:"Who Can Benefit?",
  subheadings: [
    {
      listtitle: "Achieve compliance with NEPRA and other regulatory bodies.",
    },
    {
      listtitle: "Strengthen their cybersecurity defenses.",
    },
    {
      listtitle: "Ensure seamless protection of IT and OT environments.",
    },
  ], 
  listheading1:"Our Expertise",
  subheadings1: [
    {
      listtitle1: "With extensive experience in implementing security frameworks for the power sector and beyond, our team ensures that your organization is protected by best-in-class controls. We combine technical expertise with deep knowledge of industry-specific compliance requirements, including NEPRA",
    },
  ], 
  listheading2:"Get Started",
  subheadings2: [
    {
      listtitle2: {beforeContact:"Secure your organization’s future today with Security Controls Implementation and Improvement as a Service.",
        afterContact:"to schedule a consultation or learn how we can help you enhance your security posture."
      }
    },
  ], 
},];
  return (
  <>
  <HeroSection
    Showdata={true}
    main={""}
    title={"Security Controls Implementation and Improvement as a Service"}
    discription={"In a world of growing cyber threats and regulatory scrutiny, understanding and addressing vulnerabilities in your IT and OT environments is vital. Our Security Risk and Vulnerability Assessment as a Service provides a comprehensive evaluation of your organization’s security posture, identifying gaps and offering actionable insights to fortify your defenses."}/>

  <Solutiontemplate2 rows={page1Rows} rowlast={lastRow} />
  </>)
  
}

export default SecurityControl;
