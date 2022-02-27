import React, { useContext, useEffect, useState } from 'react'
import './JobList.css'
import Job from '../../components/job/Job'
import Footer from '../../components/footer/Footer'
import { JobsContext } from '../../context/JobsContext'
import { getJobs } from '../../api/getJobsApi'

export default function JobList() {
  const [jobs, setJobs] = useContext(JobsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const resp = await getJobs("customer service");
      setJobs(resp);
      console.log(jobs);
    }
    fetchJobs();
  }, [data, setData])

  return (
    <div className="page-content">
      <section className="page-title-box">
          <div className="row justify-content-center">
              <div className="text-center text-white">
                <h3 className="mb-4 fw-bold">Job Lists</h3>
                <p>View all the entry level jobs you can apply for.</p>
                <a href="/" className="btn btn-sm btn-success">Back Home<i className="uil uil-angle-right-b"></i></a>
              </div>
          </div>
      </section>
      <section className="section" id="job-list">
        <div className="container">
          <div className="row">
            {jobs.map((job) => <Job {...job} key={job._id}/>)}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
