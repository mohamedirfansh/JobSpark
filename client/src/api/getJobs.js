import axios from 'axios';

const serverURL = ""
export const jobListAxios = axios.create({
  baseURL: serverURL,
});

export async function getJobs(industry) {
  const response = await jobListAxios.get('/jobs', {
    params:{
      industry: industry
    }
  });
  return response.data;
}
