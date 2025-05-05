import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import logo from "../../assets/Solution/img7.png";
import logo2 from "../../assets/Solution/img71.png";
import Solutiontemplate1 from '../../components/Template/Solutions/Solutiontemplate1';

function AwarenessandTraining() {
    const page1Rows = [
        {
          heading: "Why Awareness and Training Matters",
          text:"Inadequate awareness can lead to:",
          subheadings: [
            {
              title:"Phishing and Social Engineering Attacks:",
              text: "Employees unknowingly exposing sensitive information.",
            },
            {
              title:"Non-Compliance: ",
              text: "  Failure to meet regulatory standards like NEPRA.",
            },
            {
              title:"Operational Downtime:",
              text: "Caused by avoidable errors or incidents.",
            },
            {
               title:"Reputation Damage:",
                text: " Resulting from security breaches or data mishandling.",
            },
           
          ], 
          textbottom:"Our training programs address these risks, building a culture of security within your organization.",
          image:logo,
          
        },
        {
          heading: "Key Features",
          subheadings: [
            {
              title: "24/7 Proactive Monitoring: ",
              text: "Continuous surveillance of IT and OT environments to detect anomalies in real time. Leverage AI-driven analytics to identify potential threats.",
            },
            {
              title: "Rapid Incident Detection and Response:",
              text: "Immediate response to incidents with predefined protocols for containment and mitigation. Minimize the impact of security breaches on operations.",
            },
            {
              title: "Threat Intelligence Integration:",
              text: "Utilize the latest threat intelligence to stay ahead of emerging risks. Regular updates to detection algorithms and response strategies.",
            },
            {
              title: "Compliance Reporting:",
              text: "Detailed logs and incident reports aligned with NEPRA and industry standards. Support for regulatory audits and assessments.",
            },
            {
              title: "Post-Incident Analysis:",
              text: " Investigate root causes and provide actionable recommendations for strengthening defenses. Develop and update incident response playbooks.",
            },
          ],
          heading1: "Benefits",
        subheadings1: [
          {
            title1: "Enhanced Threat Visibility: ",
            text1: "Gain real-time insights into your security posture.",
          },
          {
            title1: "Minimized Downtime:",
            text1: "Ensure rapid containment and recovery from incidents.",
          },
          {
            title1: "Regulatory Compliance:",
            text1: "Meet NEPRA and other regulatory standards for security monitoring and reporting.",
          },
          {
            title1: "Peace of Mind:   ",
            text1: "Know your systems are protected 24/7 by a team of experts.",
          },
          {
            title1: "Operational Resilience:",
            text1: "Maintain uninterrupted operations, even in the face of cyber threats.",
          },
        ],
      },
      {
        heading: "How It Works",
        subheadings: [
          {
            title: "Setup and Integration:",
            text: "Implement monitoring tools and integrate them with your IT and OT systems.",
          },
          {
            title: "Baseline Establishment: ",
            text: "Establish normal behavior patterns to detect anomalies effectively.",
          },
          {
            title: "Continuous Monitoring: ",
            text: "24/7 monitoring by a team of skilled professionals.",
          },
          {
            title: "Incident Response Execution:",
            text: "Rapid containment, mitigation, and resolution of detected threats.",
          },
          {
            title: "Reporting and Optimization: ",
            text: "Provide detailed post-incident reports and continuous improvement recommendations. ",
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
              listtitle:"Organizations operating in critical sectors like power, requiring NEPRA compliance.",
            },
            {
              listtitle:"Businesses looking to enhance their security monitoring capabilities.",
            },
            {
              listtitle:"Companies seeking to minimize risks associated with IT and OT vulnerabilities.",
            },
          ], 
          listheading1:"Why Choose Us?",
          subheadings1: [
            {
              listmain1:"Industry Expertise: ",
              listtitle1: "Experience in securing IT and OT environments in the power sector.",
            },
            {
              listmain1:"24/7 Availability: ",
              listtitle1: "Around-the-clock monitoring and response services.",
            },
            {
              listmain1:"Proactive Approach: ",
              listtitle1: " Combining cutting-edge technology with expert intervention for optimal protection. ",
            },
          ], 
          listheading2:"Stay Secure Around the Clock",
          subheadings2: [
            {
              listtitle2: "Protect your systems, data, and reputation with our Monitoring and Incident Response as a Service.",
              
            },
            {
                listtitle2: {
                    afterContact:" today to safeguard your organization from evolving cyber threats.",
                  }
            },
          ], 
        },
      ];
  return (
    <>
    <HeroSection
    Showdata={true}
    main={""}
    title={"Awareness and Training as a Service"}
    discription={"Human error remains one of the leading causes of cybersecurity breaches. Equip your workforce with the knowledge and skills needed to combat cyber threats and ensure compliance with our Awareness and Training as a Service. Designed for organizations in the power sector, this service aligns with NEPRA guidelines and empowers your employees to become the first line of defense against security risks."}/>
    <Solutiontemplate1 rows={page1Rows} rowlast={lastRow}/>
    </>
  )
}

export default AwarenessandTraining