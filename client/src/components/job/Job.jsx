import React from 'react'
import './Job.css'

export default function Job({position, companyName, salary, experience, location, jobDesc, date}) {
  return (
    <div className="mt-4 col-md-6 col-lg-4">
      <div className="card job-grid-box">
        <div className="card-body p-4">
          <div>
            <img src="/assets/apple.png" alt="company logo"/>
          </div>
          <div className="mt-4">
            <a className="primary-link text-decoration-none" href="/">
              <h5 className="fs-17 mb-1">{position}</h5>
            </a>
            <p className="text-muted">{companyName}</p>
            <ul className="list-inline">
              <li className="list-inline-item"><span className="badge bg-soft-success fs-13 mt-1">{salary}</span></li>
              <li className="list-inline-item"><span className="badge bg-soft-purple fs-13 mt-1">{experience}</span></li>
              <li className="list-inline-item"><span className="badge bg-soft-blue fs-13 mt-1">{location}</span></li>
            </ul>
          </div>
          <div className="job-grid-content mt-3">
            <p className="text-muted job-desc">{jobDesc}</p>
            <div className="d-flex align-items-center justify-content-between mt-4 border-top pt-3">
              <p className="text-muted float-start mb-0">{date}</p>
              <div className="text-end"><a href="#applyNow" className="btn btn-sm btn-primary">Apply Now <i className="uil uil-angle-right-b"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
