import React from 'react'
import "../Template.css"
import logo3 from "../../../assets/Product/kaslast.png";
import Form from "../../Form/Form.jsx";

function ProductTemplate({ rows,rowmid,rowlast}) {
  return (
    <section className="container-fluid py-5 px-0 overflow-hidden">
    <div className="inner mx-3 px-2">
      {rows.map((row, index) => (
        <div
          key={index}
          className="row mb-3 p-3 align-items-center border shadow"
        >
          <div className="col-lg-8">
            <h4>{row.heading}</h4>
            <div className="bottom-content">
            <p className="mb-3 text-dark">{row.text}</p>
              {row.subheadings.map((sub, subIndex) => (
                <div key={subIndex}>
                  <h4>{sub.title}</h4>
                  <p>{sub.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            {/* Show heading1 if it exists */}
            {row.heading1 && <h4>{row.heading1}</h4>}

            {/* Show subheadings if they exist */}
            {row.subheadings1 && row.subheadings1.length > 0 && (
              <div className="bottom-content">
                {row.subheadings1.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <h4>{sub.title1}</h4>
                    <p>{sub.text1}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Always show the image if it exists */}
            {row.image && (
              <img className="img-fluid" src={row.image} alt="about" />
            )}
          </div>
        </div>
      ))}
      {rowmid && rowmid.map((row, index) => (
      <div key={index} className="row mb-3 p-3  border shadow">
        <div className='col-12 text-center mb-4'>
        <h4 >{row.listmidheading}</h4>
        </div>
          <div className="col-lg-4">
          <h4 className='bottom-list-heading'>{row.listheading}</h4>
            {row.subheadings.map((sub, subIndex) => (
            <div key={subIndex} className="bottom-list">
              {sub.listheading && (<h4 className='bottom-list-heading'>{sub.listheading}</h4>) }
            <ul>
              <li>
              {sub.listtitle}
              </li>
            </ul>
            </div>
           ))}
          </div>
          <div className="col-lg-4">
          <img className="img-fluid" src={row.imagemid} alt="about" />
          {row.imgbottomheading && <h4 className='bottom-list-heading ps-5 mt-4'>{row.imgbottomheading}</h4>}
              {row.imgbottomsubheadings1 && row.imgbottomsubheadings1.length > 0 && (
                <div className="bottom-content-list ps-5">
                  {row.imgbottomsubheadings1.map((sub, subIndex) => (
                    <ul key={subIndex}>
                    <li>
                        {sub.imgbottomtitle1}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
          </div>
          <div className="col-lg-4">
          <h4 className='bottom-list-heading'>{row.listheading1}</h4>
          {row.subheadings1.map((sub, subIndex) => (
            <div key={subIndex} className="bottom-list">
            {sub.listheading1 && (<h4 className='bottom-list-heading'>{sub.listheading1}</h4>) }
            <ul>
              <li>
              {sub.listtitle1}
               
              </li>
            </ul>
            
            </div>
          ))}
          </div>
        </div>
         ))}
      {rowlast && rowlast.map((row, index) => (
        <div
          key={index}
          className="row mb-3 p-3 align-items-center border shadow"
        >
          <div className="col-lg-8">
              <h4>{row.heading}</h4>
              {row.textbottom && <p className="mb-4 text-dark">{row.textbottom}</p>}
              <div className="bottom-content-list">
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
                
              </div>
            </div>
            <div className="col-lg-4">
              {/* Show heading1 if it exists */}
              {row.heading1 && <h4 className="mb-3">{row.heading1}</h4>}
                {row.textbottom1 && <p className="mb-4 text-dark">{row.textbottom1}</p>}
              {/* Show subheadings if they exist */}
              {row.subheadings1 && row.subheadings1.length > 0 && (
                <div className="bottom-content-list">
                  {row.subheadings1.map((sub, subIndex) => (
                    <ul key={subIndex}>
                    <li>
                        {sub.title1}
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
      <div className='row mb-3 py-3 ps-3 align-items-center border shadow'>
      <div className="col-lg-8 p-4">
      <Form/>
      </div>
      <div className="col-lg-4 pe-0 text-end">
        <img className='img-fluid' src={logo3}/>
      </div>
    </div>
    </div>
    </section>
  )
}

export default ProductTemplate;