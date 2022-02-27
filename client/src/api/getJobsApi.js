import axios from 'axios';

const serverURL = "http://localhost:5000"
export const jobListAxios = axios.create({
  baseURL: serverURL,
});

export async function getJobs(industry) {
  const response = await jobListAxios.get('/api', {
    params: {
      industry: industry
    }
  });
  return response.data;
}
