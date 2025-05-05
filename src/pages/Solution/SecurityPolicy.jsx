import React from 'react'
import Solutiontemplate2 from '../../components/Template/Solutions/Solutiontemplate2.jsx';
import HeroSection from '../../components/HeroSection/HeroSection';
import logo from "../../assets/Solution/img1.png";
import logo1 from "../../assets/Solution/img11.jpg";

function SecurityPolicy() {
  const page1Rows = [
    {
      heading: "Why Choose Our Service?",
      subheadings: [
        {
          title:"Tailored for Power Sector Needs",
          text: "Our expertise in the power sector ensures that your security policies align with NEPRA’s stringent compliance requirements.",
        },
        {
          title:"Comprehensive IT and OT Coverage",
          text: "Protect and manage both your Information Technology (IT) and Operational Technology (OT) environments with a unified approach.",
        },
        {
          title:"Proactive Risk Mitigation",
          text: "Address vulnerabilities and minimize security risks with a well-defined, continuously updated policy framework.",
        },
      ], 
      image:logo,
      
    },
    {
      heading: "Key Features",
      subheadings: [
        {
          title: "Policy Design and Implementation",
          text: "Develop and implement security policies tailored to NEPRA standards and your organization’s unique needs.",
        },
        {
          title: "Automated Policy Enforcement",
          text: "Ensure consistent policy application across IT and OT assets using cutting-edge automation tools.",
        },
        {
          title: "Regulatory Compliance Monitoring",
          text: "Real-time monitoring to ensure compliance with evolving NEPRA regulations.",
        },
        {
          title: "Incident Response and Policy Updates",
          text: "Quickly adapt policies to address emerging threats and incidents.",
        },
        {
          title: "Audit Support",
          text: "Comprehensive documentation and support for NEPRA audits.",
        },
      ],
      heading1: "Benefits",
    subheadings1: [
      {
        title1: "Enhanced Compliance",
        text1: "Stay ahead of regulatory requirements and avoid penalties.",
      },
      {
        title1: "Operational Efficiency",
        text1: "Simplify policy management processes, freeing up resources for critical tasks.",
      },
      {
        title1: "Improved Security Posture",
        text1: "Strengthen defenses for both IT and OT environments, mitigating the risk of breaches.",
      },
      {
        title1: "Scalable and Flexible",
        text1: "Designed to grow with your organization, accommodating evolving technology and regulatory landscapes.",
      },
    ],
  },{
    heading: "How It Works",
      subheadings: [
        {
          title: "Assessment",
          text: "We evaluate your current IT and OT environments and identify gaps in compliance and security policies.",
        },
        {
          title: "Policy Development",
          text: "Our team collaborates with you to design tailored security policies aligned with NEPRA regulations.",
        },
        {
          title: "Implementation",
          text: "Policies are applied seamlessly across your infrastructure with minimal disruption to operations.",
        },
        {
          title: "Continuous Monitoring and Updates",
          text: "We monitor compliance and security in real time, ensuring policies remain effective and updated.",
        },
        
      ],
      image:logo1,
  },
  ];
  return (
    <>
     <HeroSection
        Showdata={true}
        main={""}
        title={"Security Policy Management for IT and OT Assets as a Service"}
        discription={"In today’s interconnected power sector landscape, ensuring seamless compliance with NEPRA regulations while safeguarding critical IT and OT assets is crucial. Our Security Policy Management as a Service is designed to simplify and streamline the management of security policies across your organization’s infrastructure, enhancing compliance, security, and operational efficiency."}/>
    <Solutiontemplate2 rows={page1Rows}> 
     
      <div className="row mb-3 p-3 align-items-center border shadow">
            <div className="col-lg-6">
              <h4>How You Benefit:</h4>
              <div className="bottom-list">
              <ul>
                <li>
                  With years of experience in the power sector and deep
                  knowledge of NEPRA regulations, we are your trusted partner in
                  achieving compliance while protecting critical assets.
                </li>
              </ul>
              </div>
             
            </div>

            <div className="col-lg-6">
              <h4>Get Started Today:</h4>
              <div className="bottom-list">
              <ul>
                <li>
                  Ensure your IT and OT assets are secure and compliant with our
                  Security Policy Management as a Service.
                  <a
                    href="https://nepra.spsnet.com/contact-us/"
                    className="text-primary fw-normal me-1"
                  >
                    Contact Us
                  </a>
                  to learn more or schedule a consultation with our experts.
                </li>
              </ul>
              </div>
              
            </div>
      </div>
    
    </Solutiontemplate2>
    
    </>
   

  )
}

export default SecurityPolicy;