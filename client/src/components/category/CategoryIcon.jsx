import React, {useContext} from 'react'
import { JobsContext } from '../../context/JobsContext'
import { getJobs } from '../../api/getJobsApi'
import { Link } from 'react-router-dom'

export default function CategoryIcon({name, icon}) {
  const routeMap = {
    "Information Technology": "technology",
    "Healthcare": "healthcare",
    "Manufacturing": "manufacturing",
    "Banking": "banking",
    "Food & Beverages": "food",
    "Retail": "retail",
    "Customer Service": "customer-service",
    "Engineering": "engineering",
  }
  const route = routeMap[name];
  return (
    <div mt="4" pt="2" className="col-md-6 col-lg-3 mb-5 mt-5">
      <div className="popu-category-box rounded text-center">
        <div className="popu-category-icon icons-md">
          <img src={`/assets/${icon}.png`} alt='category logo' />
        </div>
        <div className="popu-category-content mt-4">
          <Link to={`/jobs/${route}`}>
            {console.log(route)}
            <h5 className="text-dark stretched-link text-decoration-none fs-18">{name}</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}
