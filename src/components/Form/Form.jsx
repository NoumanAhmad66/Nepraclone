import React from 'react'

function Form() {
  return (
    <>
    <form className="row g-4">
    <div className="col-md-12">
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
        type="tel"
        className="form-control"
        placeholder="Enter your phone number"
        required
      />
    </div>
    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        placeholder="Company / Organization"
        required
      />
    </div>
    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        placeholder="Job Title / Role"
        required
      />
    </div>
    <div className="col-12 mt-4">
      <h6>
        What date and time work best for you to meet with our
        consultant?
      </h6>
    </div>
    <div className="col-md-6">
      <input type="time" className="form-control" required />
    </div>
    <div className="col-md-6">
      <input type="date" className="form-control" required />
    </div>
    <div className="col-md-12">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
        />
        <label className="form-check-label">
          Agree to terms and conditions
        </label>
      </div>
    </div>
    <div className="col-12">
      <button className="main-btn" type="submit">
        Submit form
      </button>
    </div>
  </form>
  </>
  )
}

export default Form