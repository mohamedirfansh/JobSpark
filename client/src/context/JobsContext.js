import React, {createContext, useState} from 'react'
import jobs from '../dummyData';

export const JobsContext = createContext();

const INITIAL_JOBS = jobs;

export const JobsProvider = (props) => {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      {props.children}
    </JobsContext.Provider>
  );
}
