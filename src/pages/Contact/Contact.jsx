import React from 'react';
import "./Contact.css";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Form from '../../components/Form/Form.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
    <HeroSection
        Showdata={true}
        main={""}
        title={"Contact Us for NEPRA Compliance Assistance"}
        discription={
          "Have questions about SPS NEPRA Cybersecurity Compliance? We're here to help! Reach out to us for expert guidance, support, and tailored solutions to meet your compliance needs in the power sector."
        }
        />
        <section className="container-fluid py-5">
         <div className='row mb-3 px-4'>
          <div className="col-lg-7">
            <h4 className='mb-4'>Reach out to us for expert guidance and support in achieving SPS NEPRA Cybersecurity Compliance.</h4>
              <Form/>
          </div>
          <div className="col-lg-5">
           <div className='box shadow p-4 mt-4'>
             <h4>Contact Info</h4>
             <div className='row align-items-baseline mt-3 mb-3'>
              <div className="col-1 pe-0">
                <FontAwesomeIcon className='icon'  icon={faPhoneVolume}/>
              </div>
              <div className="col-2 ps-0 heading">
                <h6>Call Us</h6>
              </div>
              <div className="col-9 text-end description">
              <h6>
              +301-337-2290</h6>
              </div>
             
             </div>
             <div className='row align-items-baseline mb-3'>
              <div className="col-1 pe-0 ">
                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
              </div>
              <div className="col-2 ps-0 heading">
                <h6>Email</h6>
              </div>
              <div className="col-9 text-end  description">
              <h6>
              support@spsnet.com</h6>
              </div>
             
             </div>
             <div className='row align-items-baseline'>
              <div className="col-1 pe-0">
                <FontAwesomeIcon className='icon' icon={faLocationDot}/>
              </div>
              <div className="col-2 ps-0 heading">
                <h6>Address</h6>
              </div>
              <div className="col-9 text-end  description">
              <h6>
              2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.</h6>
              </div>
             
             </div>
           </div>
           <div className="box2 shadow p-4 mt-5">
            <h4 className="text-white">Follow Us</h4>
            <ul className='d-flex gap-3'>
              <li>
                <FontAwesomeIcon className='text-white' icon={faTwitter} />
              </li>
              <li>
              <FontAwesomeIcon className=" text-white" icon={faLinkedin} />
              </li>
            </ul>
           </div>
          </div>
         </div>
        </section>
      </>
  )
}

export default Contact