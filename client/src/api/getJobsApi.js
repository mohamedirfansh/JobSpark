import axios from 'axios';

const serverURL = "localhost:5000"
export const jobListAxios = axios.create({
  baseURL: serverURL,
});

export async function getJobs(industry) {
  const response = await jobListAxios.get('/api', {
    headers: {
      industry: industry
    }
  });
  console.log(response)
  return response.data;
}
