import React from "react";
import "../../../index.css";
import "../Template.css";

function Solutiontemplate1({ rows,rowlast,children }) {
  return (
    <section className="container-fluid py-5 px-0 overflow-hidden">
      <div className="inner mx-3 px-2">
        {rows.map((row, index) => (
          <div
            key={index}
            className="row mb-3 p-3 align-items-center border shadow"
          >
            <div className="col-lg-7">
              <h4>{row.heading}</h4>
              <div className="bottom-content-list">
              <p className="mb-3 text-dark">{row.text}</p>
                {row.subheadings.map((sub, subIndex) => (
                 
                  <ul key={subIndex}>
                    <li>
                      <strong className="me-2">
                      {sub.title}
                      </strong>
                    
                    {sub.text}
                    </li>
                  </ul>
                ))}
                <p className="mt-4 mb-0 text-dark">{row.textbottom}</p>
              </div>
            </div>
            <div className="col-lg-5">
              {/* Show heading1 if it exists */}
              {row.heading1 && <h4 className="mb-3">{row.heading1}</h4>}

              {/* Show subheadings if they exist */}
              {row.subheadings1 && row.subheadings1.length > 0 && (
                <div className="bottom-content-list">
                  {row.subheadings1.map((sub, subIndex) => (
                    <ul key={subIndex}>
                      <li>
                        <strong className="me-2">
                        {sub.title1}
                        </strong>
                        {sub.text1}
                      </li>
                    </ul>
                  ))}
                </div>
              )}

              {/* Always show the image if it exists */}
              {row.image && (
                <img className="img-fluid" src={row.image} alt="about" style={row.style}/>
              )}
            </div>
          </div>
        ))}
        {rowlast &&
          rowlast.map((row, index) => (
            <div key={index} className="row mb-3 p-3  border shadow">
              <div className="col-lg-4">
                <h4>{row.listheading}</h4>
                {row.subheadings.map((sub, subIndex) => (
                  <div key={subIndex} className="bottom-list">
                    <ul>
                      <li>
                        {sub.listtitle}</li>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="col-lg-4">
                <h4>{row.listheading1}</h4>
                {row.subheadings1.map((sub, subIndex) => (
                  <div key={subIndex} className="bottom-list">
                    <ul>
                      <li>
                      <strong className="me-2">
                        {sub.listmain1}
                        </strong>
                        {sub.listtitle1}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-lg-4">
                <h4>{row.listheading2}</h4>
                {row.subheadings2.map((sub, subIndex) => {
                  const { listtitle2 } = sub;

                  if (typeof listtitle2 === "object") {
                    const { beforeContact = "", afterContact = "" } =
                      listtitle2;

                    return (
                      <div key={subIndex} className="bottom-list">
                        <ul>
                          <li>
                            {beforeContact}
                            <a
                              href="https://nepra.spsnet.com/contact-us/"
                              className="text-primary fw-normal me-1"
                            >
                              Contact Us
                            </a>
                            {afterContact}
                          </li>
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <ul key={subIndex}>
                      <li className="list-last">{listtitle2}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          ))}
        {children}
      </div>
    </section>
  );
}

export default Solutiontemplate1;
