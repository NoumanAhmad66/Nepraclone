import React from "react";
import "./Plantemplate.css";
import Form from "../Form/Form.jsx";

function Plantemplate({ plandata, rightSectionheading }) {
  return (
    <section className="container-fluid px-0 overflow-hidden">
      <div className="inner">
        {plandata.map((row, index) => (
          <div key={index} className="row mb-3 p-4">
            <div className="col-lg-7">
              <h4 className="mb-3">{row.heading}</h4>
              <div className="bottom-content">
                {row.subheadings.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <h4>{sub.title}</h4>
                    <p>{sub.text}</p>
                    {sub.listtitle && (
                      <ul className="bottom-list">
                        <li>{sub.listtitle}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <h4 className="mb-3">{row.heading2}</h4>
              <div className="bottom-content">
                {row.subheadings2.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <ul className="bottom-list">
                      <li>{sub.listtitle2}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <h4 className="mb-3">{rightSectionheading}</h4>
              <Form/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plantemplate;
