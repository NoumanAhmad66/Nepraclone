import React from "react";
import "../../index.css";
import "./Solution.css";
import logo from "../../assets/Solution/img1.png";
import logo2 from "../../assets/Solution/img11.jpg";

function Solutiontemplate({Showrow1,Showrow2,Showrow3,Showrow4,heading1,subheading1,subheading2,subheading3,text1,text2,text3}) {
  return (
    <>
      
      <section className="container-fluid py-5 px-0 overflow-hidden">
        <div className="inner mx-3 px-2">
          {Showrow1 &&(
            <div className="row mb-3 p-3 align-items-center border shadow">
            
            <div className="col-lg-7 px-0">
              <h4>{heading1?heading1:"Why Choose Our Service?"}</h4>
              <div className="bottom-content">
                <h4>{subheading1?subheading1:"Tailored for Power Sector Needs"}</h4>
                <p>{text1?text1:`Our expertise in the power sector ensures that your security
                  policies align with NEPRA’s stringent compliance requirements`}
                  
                </p>
                <h4>{subheading2?subheading2:"Comprehensive IT and OT Coverage"}</h4>
                <p>{text2?text2:`Protect and manage both your Information Technology (IT) and
                  Operational Technology (OT) environments with a unified
                  approach.`}
                  
                </p>
                <h4>{subheading3?subheading3:"Proactive Risk Mitigation"}</h4>
                <p className="mb-0">{text3?text3:`Address vulnerabilities and minimize security risks with a
                  well-defined, continuously updated policy framework.`}
                  
                </p>
              </div>
            </div>
            <div className="col-lg-5 px-0">
              <img className="img-fluid" src={logo} alt="about" />
            </div>
          </div>
          )}  
          
          {Showrow2 &&(
             <div className="row mb-3 p-3 align-items-center border  shadow">
             <div className="col-lg-7">
               <h4>{heading1?heading1:"Key Features"}</h4>
               <div className="bottom-content">
                 <h4>{subheading1?subheading1:"Policy Design and Implementation"}</h4>
                 <p>{text1?text1:`Develop and implement security policies tailored to NEPRA
                   standards and your organization’s unique needs.`}
                   
                 </p>
                 <h4>{subheading2?subheading2:"Automated Policy Enforcement"}</h4>
                 <p>
                   {text2?text2:`Ensure consistent policy application across IT and OT assets
                   using cutting-edge automation tools.`}
                 </p>
                 <h4>Regulatory Compliance Monitoring</h4>
                 <p>
                   Real-time monitoring to ensure compliance with evolving NEPRA
                   regulations.
                 </p>
                 <h4>Incident Response and Policy Updates</h4>
                 <p>
                   Quickly adapt policies to address emerging threats and
                   incidents.
                 </p>
                 <h4>Audit Support</h4>
                 <p className="mb-0">
                   Comprehensive documentation and support for NEPRA audits.
                 </p>
               </div>
             </div>
             <div className="col-lg-5">
               <h4 >Benefits</h4>
 
               <div className="bottom-content">
                 <h4>Enhanced Compliance</h4>
                 <p>
                   Stay ahead of regulatory requirements and avoid penalties.
                 </p>
                 <h4>Operational Efficiency</h4>
                 <p>
                   Simplify policy management processes, freeing up resources for
                   critical tasks.
                 </p>
                 <h4>Improved Security Posture</h4>
                 <p>
                   Strengthen defenses for both IT and OT environments,
                   mitigating the risk of breaches.
                 </p>
                 <h4>Scalable and Flexible</h4>
                 <p className="mb-0">
                   Designed to grow with your organization, accommodating
                   evolving technology and regulatory landscapes.
                 </p>
               </div>
             </div>
           </div>
          )}  
         
          {Showrow3 &&(
             <div className="row mb-3 p-3 align-items-center border shadow">
             <div className="col-lg-7 p-0">
               <h4>How It Works</h4>
 
               <div className="bottom-content">
                 <h4>Assessment</h4>
                 <p>
                   We evaluate your current IT and OT environments and identify
                   gaps in compliance and security policies.
                 </p>
                 <h4>Policy Development</h4>
                 <p>
                   Our team collaborates with you to design tailored security
                   policies aligned with NEPRA regulations.
                 </p>
                 <h4>Implementation</h4>
                 <p>
                   Policies are applied seamlessly across your infrastructure
                   with minimal disruption to operations.
                 </p>
                 <h4>Continuous Monitoring and Updates</h4>
                 <p className="mb-0">
                   We monitor compliance and security in real time, ensuring
                   policies remain effective and updated.
                 </p>
               </div>
             </div>
             <div className="col-lg-5 p-0">
               <img className="img-fluid" src={logo2} alt="about" />
             </div>
           </div>
          )}  
         {Showrow4 && (
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
         )}
          
        </div>
      </section>
    </>
  );
}

export default Solutiontemplate;
