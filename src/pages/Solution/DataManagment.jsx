import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection';
import Solutiontemplate1 from '../../components/Template/Solutions/Solutiontemplate1';
import logo from "../../assets/Solution/img4.png";
import logo2 from "../../assets/Solution/img41.png";

function DataManagment() {
  const page1Rows = [
    {
      heading: "Why It Matters",
      text:"Inadequate data management can lead to inefficiencies, data breaches, and compliance issues. Our service ensures your organization’s data is:",
      subheadings: [
        {
          title:"Secure:",
          text: " Protected against unauthorized access and breaches.",
        },
        {
          title:"Accessible:",
          text: " Available to the right people at the right time.",
        },
        {
          title:"Compliant:",
          text: "Aligned with regulatory requirements like NEPRA and global data governance standards.",
        },
      ], 
      image:logo,
      
    },
    {
      heading: "Key Features",
      subheadings: [
        {
          title: "Centralized Data Management:",
          text: "Simplify data organization by consolidating diverse data sources into a single, easy-to-manage platform.",
        },
        {
          title: "Data Security and Encryption:",
          text: " Protect sensitive data with industry-leading encryption protocols and robust access controls.",
        },
        {
          title: "Data Governance and Compliance:",
          text: "Ensure data handling meets the regulatory requirements of NEPRA, NIST, and other industry standards.",
        },
        {
          title: "Backup and Disaster Recovery:",
          text: "Maintain business continuity with automated backups and rapid recovery solutions in case of data loss.",
        },
        {
          title: "Scalable and Customizable Solutions:",
          text: "Adapt your data management framework to grow box-shaddow-custom mb-3 p-3 d-flex align-items-center with your organization’s needs.",
        },
      ],
      heading1: "Benefits",
    subheadings1: [
      {
        title1: "Improved Decision-Making:",
        text1: " Leverage organized and accurate data for better strategic planning.",
      },
      {
        title1: "Enhanced Data Security:",
        text1: " Protect critical information from breaches and unauthorized access.",
      },
      {
        title1: "Operational Efficiency:",
        text1: "Streamline data workflows and eliminate redundancies.",
      },
      {
        title1: "Regulatory Readiness: ",
        text1: "Simplify compliance with NEPRA and other data-related regulations.",
      },
      {
        title1: "Cost Savings:",
        text1: "Optimize resource utilization and reduce the costs associated with data mismanagement.",
      },
    ],
  },
  {
    heading: "How It Works",
    subheadings: [
      {
        title: "Assessment:",
        text: "Evaluate your current data management processes and infrastructure.",
      },
      {
        title: "Design and Implementation:",
        text: "Develop and deploy a tailored data management solution.",
      },
      {
        title: "Training and Support:",
        text: "Equip your team with the knowledge to use the system effectively.",
      },
      {
        title: "Continuous Monitoring and Optimization:",
        text: "Regular updates and support to ensure your data management framework stays efficient and secure.",
      },
    ],
    image:logo2,
  },
  ];
  
  const lastRow =[
    {
      listheading:"Who Can Benefit?",
      subheadings: [
        {
          listtitle:"Power sector organizations managing IT and OT data.",
        },
        {
          listtitle:"Businesses seeking NEPRA compliance.",
        },
        {
          listtitle:"Companies needing to enhance data security and streamline operations.",
        },
      ], 
      listheading1:"Why Choose Us?",
      subheadings1: [
        {
          listmain1:"Industry Expertise: ",
          listtitle1: "Specialized knowledge in the power sector and NEPRA requirements.",
        },
        {
          listmain1:"End-to-End Solutions:",
          listtitle1: " Comprehensive service from assessment to continuous improvement.",
        },
        {
          listmain1:"Proven Results:",
          listtitle1: "Helping organizations achieve efficiency, compliance, and security.",
        },
      ], 
      listheading2:"Take Control of Your Data Today",
      subheadings2: [
        {
          listtitle2: "Don’t let data complexities slow you down. Simplify, secure, and optimize your data management with our Data Management as a Service.",
        },
      ], 
    },
  ];
  return (
    <>
    <HeroSection
    Showdata={true}
    main={""}
    title={"Data Management as a Service"}
    discription={"Data is the backbone of modern organizations, driving insights, operations, and innovation. However, managing large volumes of data while ensuring its security, integrity, and accessibility can be complex. Our Data Management as a Service offers a comprehensive solution tailored to your business needs, helping you organize, secure, and optimize data across IT and OT environments while maintaining regulatory compliance with standards like NEPRA."}/>
    <Solutiontemplate1 rows={page1Rows} rowlast={lastRow} />
    </>
  )
}

export default DataManagment;