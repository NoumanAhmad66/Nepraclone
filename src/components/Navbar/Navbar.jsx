import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/nav/logo.png";

const DashboardHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Products",
      subItems: [
        { title: "Kaspersky", link: "/tech-provider/kaspersky/" },
        { title: "Tenable", link: "/tech-provider/tenable/" },
        { title: "Microsoft", link: "/tech-provider/microsoft/" },
        { title: "Fortinet", link: "/tech-provider/fortinet/" },
        { title: "Trend Micro", link: "/tech-provider/trend-micro/" },
      ],
     },
    {
      title: "Services",
      subItems: [
        {
          title: "Security Policy Management for IT and OT",
          link: "/services/security-policy-management-for-it-and-ot",
        },
        {
          title: "Security Controls Implementation and Improvement",
          link: "/services/security-controls-implementation-and-improvement/",
        },
        {
          title: "Security Risk & Vulnerability Assessment",
          link: "/services/security-risk-vulnerability-assessment",
        },
        { title: "Data Management", link: "/services/data-management/" },
        {
          title: "Audit & Risk Assessment",
          link: "/services/audit-and-risk-assessment/",
        },
        {
          title: "Monitoring & Incident Response",
          link: "/services/monitoring-and-incident-response/",
        },
        {
          title: "Awareness & Training",
          link: "/services/awareness-and-training/",
        },
        { title: "Regulatory Reporting", link: "/services/regulatory-reporting/" },
      ],
    },
    {
      title: "Pricing",
      link: "/pricing", 
      subItems: [
        { title: "Basic", link: "/basic" },
        { title: "Standard", link: "/standard" },
        { title: "Premium", link: "/premium" },
      ],
    },
    {
      title: "Activities",
      subItems: [
        { title: "Webinar", link: "/activities/webinar " },
        { title: "Blog", link: "/activities/blog/" },
        
      ],
    },
    { title: "About Us", link: "/aboutus", 
      subItems: [
        { title: "Contact Us", link: "/contactus" },
        {title:"Jobs", link:"/jobs"},
      ],
    },
  ];

  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 0);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav className="container-fluid navbar-ui">
      {/* <div className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""}`}> */}
      <div className="navbar navbar-expand-lg py-0 ">
      <div className="d-flex justify-content-between align-items-center w-100 px-4">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="img-fluid"/>
        </Link>

        {/* Navigation Items */}
        <ul className="navbar-nav  d-flex align-items-center gap-3">
          {menuItems.map((item, index) => {
             const isLastItem = index === menuItems.length - 1; // check if it's the last item
            return (
           
            <li key={index} className={`nav-item ${item.subItems ? "dropdown" : ""}`}>
              {item.subItems ? (
                <>
                  <Link
                    to="#"
                    className={`nav-link   list-arrow ${
                       location.pathname === item.link ? "text-primary" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                  <ul className={isLastItem ? "dropdown-menu-last" : "dropdown-menu menu-width"}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.link} className="dropdown-item">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={item.link}
                  className={`nav-link ${
                    location.pathname === item.link ? "text-primary" : ""
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
)})}
        </ul>
        {/* Login button*/}
        <Link to="/login" className="main-btn">
          Login to CSM
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
