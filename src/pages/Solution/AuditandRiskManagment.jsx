import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import logo from "../../assets/Solution/img5.jpg";
import logo2 from "../../assets/Solution/img51.webp";
import Solutiontemplate1 from '../../components/Template/Solutions/Solutiontemplate1.jsx';

function AuditandRiskManagment() {
    const page1Rows = [
        {
          heading: "Why Audit and Risk Assessment Matters",
          text:"Regular audits and risk assessments are critical for:",
          subheadings: [
            {
              title:"Identifying Gaps:",
              text: "Uncover vulnerabilities in systems, processes, and policies.",
            },
            {
              title:"Achieving Compliance: ",
              text: "Meet regulatory requirements such as NEPRA, NIST, and ISO standards.",
            },
            {
              title:"Mitigating Risks:",
              text: "Proactively address potential threats to prevent incidents.",
            },
            {
               title:"Optimizing Resources:",
                text: "Prioritize risk mitigation efforts based on their impact and likelihood.",
            },
          ], 
          image:logo,
          style: {
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          },
          
        },
        {
          heading: "Key Features",
          subheadings: [
            {
              title: "Comprehensive Security Audits:",
              text: "Assess IT and OT infrastructure for gaps in security and operational efficiency.",
            },
            {
              title: "Detailed Risk Assessment:",
              text: "Evaluate potential threats and vulnerabilities, both internal and external.",
            },
            {
              title: "Compliance Readiness:",
              text: "Ensure adherence to NEPRA standards and other relevant regulations.",
            },
            {
              title: "Customized Reporting:",
              text: "Receive detailed audit reports tailored to your organizational needs.",
            },
            {
              title: "Mitigation Planning and Support:",
              text: "Develop tailored risk mitigation strategies and collaborate on implementation.",
            },
          ],
          heading1: "Benefits",
        subheadings1: [
          {
            title1: "Enhanced Security: ",
            text1: "Strengthen your defenses by addressing vulnerabilities proactively.",
          },
          {
            title1: "Regulatory Confidence:",
            text1: "Avoid penalties and ensure compliance with NEPRA and other standards.",
          },
          {
            title1: "Operational Efficiency:",
            text1: "Optimize processes to improve overall performance and resilience.",
          },
          {
            title1: "Informed Decision-Making:  ",
            text1: "Leverage clear insights to allocate resources effectively.",
          },
          {
            title1: "Risk Reduction:",
            text1: " Minimize potential threats to your systems and operations.",
          },
        ],
      },
      {
        heading: "How It Works",
        subheadings: [
          {
            title: "Initial Engagement:",
            text: "Understand your organizational needs, goals, and compliance requirements.",
          },
          {
            title: "Assessment Phase: ",
            text: "Conduct in-depth audits and risk evaluations of your IT and OT environments.",
          },
          {
            title: "Report and Recommendations: ",
            text: " Provide a comprehensive report with findings, prioritized risks, and actionable recommendations.",
          },
          {
            title: "Remediation Support:",
            text: " Collaborate on the implementation of mitigation plans and compliance strategies.",
          },
          {
            title: "Ongoing Support (Optional):",
            text: "Periodic reviews and assessments to maintain an optimal security posture.",
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
              listtitle:"Power sector organizations aiming for NEPRA compliance.",
            },
            {
              listtitle:"Businesses seeking to improve their cybersecurity and operational resilience.",
            },
            {
              listtitle:"Companies needing a clear roadmap for risk mitigation.",
            },
          ], 
          listheading1:"Why Choose Us?",
          subheadings1: [
            {
              listmain1:"Industry-Specific Expertise: ",
              listtitle1: " Decades of experience serving the power sector.",
            },
            {
              listmain1:"Regulatory Alignment: ",
              listtitle1: " Proven track record in helping organizations achieve compliance.",
            },
            {
              listmain1:"End-to-End Solutions:",
              listtitle1: " From audit to implementation, we provide a complete service.",
            },
          ], 
          listheading2:"Take Control of Your Data Today",
          subheadings2: [
            {
              listtitle2: "Take a proactive approach to security and compliance. Partner with us for Audit and Risk Assessment as a Service to safeguard your IT and OT environments.",
              
            },
            {
                listtitle2: {
                    afterContact:"to schedule your assessment or learn more.",
                  }
            },
          ], 
        },
      ];
  return (
    <><HeroSection
    Showdata={true}
    main={""}
    title={"Audit and Risk Assessment as a Service"}
    discription={"As the cybersecurity landscape evolves, organizations face increasing pressure to protect their assets, ensure compliance, and minimize risks. Our Audit and Risk Assessment as a Service provides a comprehensive evaluation of your IT and OT environments, helping you identify vulnerabilities, achieve regulatory compliance, and enhance operational resilience."}/>
    <Solutiontemplate1 rows={page1Rows} rowlast={lastRow}/>
    </>
  )
}

export default AuditandRiskManagment