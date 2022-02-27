import React, { useState } from 'react'
import './Job.css'

export default function Job({title, company, salary, industry, locations, description, date, url}) {
  const [companyLogoPath, setCompanyLogoPath] = useState(`/assets/company_logos/${company}.jpg`);
  const defaultCompanyLogo = () => (setCompanyLogoPath(`assets/apple.png`));
  return (
    <div className="mt-4 col-md-6 col-lg-4">
      <div className="card job-grid-box">
        <div className="card-body p-4">
          <div>
            <img src={companyLogoPath} onError={defaultCompanyLogo} width="64px" height="64px" alt="company logo"/>
          </div>
          <div className="mt-4">
            <a className="primary-link text-decoration-none" href="/">
              <h5 className="fs-17 mb-1">{title}</h5>
            </a>
            <p className="text-muted">{company}</p>
            <ul className="list-inline">
              <li className="list-inline-item"><span className="badge bg-soft-success fs-13 mt-1">{salary}</span></li>
              <li className="list-inline-item"><span className="badge bg-soft-purple fs-13 mt-1">{industry}</span></li>
              <li className="list-inline-item"><span className="badge bg-soft-blue fs-13 mt-1">{locations}</span></li>
            </ul>
          </div>
          <div className="job-grid-content mt-3">
            <p className="text-muted job-desc">{description}</p>
            <div className="d-flex align-items-center justify-content-between mt-4 border-top pt-3">
              <p className="text-muted float-start mb-0">{date}</p>
              <div className="text-end"><a href={url} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Apply Now</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
