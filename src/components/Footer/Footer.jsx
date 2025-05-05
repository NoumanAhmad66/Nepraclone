import React from "react";
import "./Footer.css";
import logo from "../../assets/nav/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <section id="footer" className="footer-back pt-md-5 pt-4">
    <div className="container-fluid px-md-4">
            <div className="row pb-3">
                <div className="col-sm-12 col-md-6 col-lg-6">
                            <a href="https://nepra.spsnet.com/">
                            <img className="img-fluid w-75" src={logo} alt="logo"/>
                            </a>
                     
                            <p className="mt-4 fw-normal">Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud-powered industry
                                solutions. With expertise across design, development, security, and operations, we build
                                scalable, secure, and reliable systems. Our award-winning team includes IBM-certified
                                inventors and global competition champions.</p>
                        
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 ps-md-5 ">
                            <h3 className=" text-white">Services</h3>
                     
                        <ul className="list">
                            <li><a href="#"><FontAwesomeIcon icon={faAngleRight}/>Security Policy Management for IT and OT assets</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Security controls implementation and improvement</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Security Risk Vulnerability Assessment</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Data Management</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Audit and Risk Assessment</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Monitoring and incident response</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Awareness and Training</a></li>
                            <li><a href="#"> <FontAwesomeIcon icon={faAngleRight}/>Regulatory Reporting</a></li>
                        </ul>
                </div>        
            </div>
    </div>
    <div className="footer-lower">
        <div className="container">
                <p className="mb-0 text-center">
                <span>Design & Developed By</span><a href="https://spsnet.com/" target="_blank"> Software Productivity
                        Strategists, Inc.</a>
                </p>
        </div>
    </div>
    </section>
  );
};

export default Footer;
