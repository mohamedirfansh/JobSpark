import React, { useContext } from 'react'
import './JobList.css'
import Job from '../../components/job/Job'
import Footer from '../../components/footer/Footer'
import { JobsContext } from '../../context/JobsContext'

export default function JobList() {
  const [jobs, setJobs] = useContext(JobsContext);
  return (
    <div className="page-content">
      <section className="page-title-box">
          <div className="row justify-content-center">
              <div className="text-center text-white">
                <h3 className="mb-4 fw-bold">Job Lists</h3>
                <p>View all the entry level jobs you can apply for.</p>
              </div>
          </div>
      </section>
      <section className="section" id="job-list">
        <div className="container">
          <div className="row">
            {jobs.map((job) => <Job {...job} key={job.id}/>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
