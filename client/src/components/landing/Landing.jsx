import React from 'react'

export default function Landing() {
  return (
    <div className="container">
      <div className='align-items-center row'>
        <div className="col-lg-7">
          <div className='mb-4 pb-3 me-lg-5'>
            <h1 className="display-5 fw-semibold mb-3">
              Find your dream jobs with <span className="text-primary fw-bold">JobSpark</span>
            </h1>
            <p className="lead text-muted mb-0">
              Finding jobs for graduates with no experience can be a tiring a difficult task. Fret not, JobSpark is here to ignite the spark and kickstart your career!
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="mt-5 mt-md-0">
            <img src="/assets/find-job.png" alt="" className="home-img" />
          </div>
        </div>
      </div>
    </div>
  )
}
