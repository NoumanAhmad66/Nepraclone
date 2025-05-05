import React, { useState } from "react";
import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Feature_list from "../../assets/features/Featureslist.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BrandLogos from "../../components/animation/Brand.jsx";
import Marquee from "../../components/animation/Marquee.jsx";
import cards_data from "../../assets/card/Card.js";

const Home = () => {
  const [selectedRole, setSelectedRole] = useState(Feature_list[0]);

  const handleFeatureClick = (feature) => {
    setSelectedRole(feature);
  };
  
  return (
    <>
      <HeroSection
        main={"NEPRA Compliance as a Service"}
        mainright={"Choose a Plan"}
        Showcard={true}
      />
      <div className="container-fluid px-md-5">
        <Marquee />
      </div>
      {/* plan cards */}
      <div className="container-fluid px-md-5 mt-5">
        <div className="col-md-12">
          <h2 className="text-black section-heading">Choose Your Plan</h2>
        </div>
        <div className="row">
          {cards_data.map((card, index) => (
            <div className="col-md-4 mb-md-0 mb-4 card-size " key={index}>
              <div className="card w-100 text-center card-pack shadow-lg  rounded-3 mb-5 bg-body">
              <div style={{ height: "45px" }}>
              {index === 0 && (
            <div className="text-white py-3 rounded-top badge1">
            <h5 className="mb-0 text-white">Most Popular</h5>
            </div>
            )}
            </div>

                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="w-100 mt-3"> 
                  <h5 className="card-title mb-3">{card.title}</h5>
                  <h6 className="card-text text-dark text-center mb-3">
                  {card.description.includes("$") ? (
    <>
      <span className="price-highlight">
        {card.description.split("/")[0]}
      </span>
      /{card.description.split("/")[1]}
    </>
  ) : (
    card.description
  )}
                  </h6>
                  <button type="button" className="main-btn btn-1">
                    {card.button_text}
                  </button>
                  </div>
                  <div className="bottom-list text-start">
                    <ul>
                      {card.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="feature-section pt-5 pb-5 ">
        <div className="container-fluid px-4">
        <div className="col-md-12">
          <h2 className="text-black section-heading">Features</h2>
        </div>
          <div className="row">
            <div className="col-lg-6 pb-1 d-flex flex-column row-gap-md-3">
              {Feature_list.map((feature, index) => (
                <div key={index}>
                  <ul className="feature-list">
                    <li
                      className="list-group-item"
                      onClick={() => handleFeatureClick(feature)}
                      role="button"
                      tabIndex={0}

                    >
                      {feature.maintitle}
                      <FontAwesomeIcon icon={faAngleRight} className="float-end" />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-lg-6 pb-30 mt-lg-0 mt-md-4 mt-3">
              <div key={selectedRole.maintitle} className="animated-feature">
                {selectedRole && (
                  <>
                    <h3>{selectedRole.title}</h3>
                    <p className="description">
                      {selectedRole.description}
                      {selectedRole === Feature_list[0] && (
                        <span className="text-font-size">
                          <a href="https://nepra.spsnet.com/services/security-policy-management-for-it-and-ot/">
                            Learn More <FontAwesomeIcon icon={faAngleRight} />
                          </a>
                        </span>
                      )}
                    </p>
                    {selectedRole != Feature_list[0] && (
                      <>
                        <ul className="feature-data-list">
                          <li className="list-item">{selectedRole.point1}</li>
                          <li className="list-item">{selectedRole.point2}</li>
                          <li className="list-item">{selectedRole.point3}</li>
                          <li className="list-item">{selectedRole.point4}</li>
                        </ul>
                        <button className="btn-2 " type="submit">
                          Learn More
                        </button>
                      </>
                    )}
                  </>
                )}
                {selectedRole === Feature_list[0] && (
                  <form className="row g-4 ">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control text-capitalize"
                        placeholder="Name*"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email*"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name*"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="file"
                        className="form-control"
                        aria-label="file example"
                        required
                      />
                      <div className="invalid-feedback">
                        Example invalid form file feedback
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-control">
                        <p className="text-dark m-0">
                          <strong>Disclaimer:</strong> We respect your privacy.
                          Any files or data shared with us are not saved or
                          stored and are permanently discarded after your
                          assessment.
                        </p>
                      </div>
                    </div>
                    <div className="col-12  mt-4 d-flex justify-content-lg-end">
                      <button className="main-btn " type="submit">
                        Submit form
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandLogos />
    </>
  );
};

export default Home;
