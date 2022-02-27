import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import JobListTech from './pages/jobs/JobListTech';
import JobListHealth from './pages/jobs/JobListHealth';
import JobListManufacture from './pages/jobs/JobListManufacture';
import JobListBank from './pages/jobs/JobListBank';
import JobListFood from './pages/jobs/JobListFood';
import JobListRetail from './pages/jobs/JobListRetail';
import JobListCustomer from './pages/jobs/JobListCustomer';
import JobListEng from './pages/jobs/JobListEng';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jobs/technology" element={<JobListTech />} />
        <Route exact path="/jobs/healthcare" element={<JobListHealth />} />
        <Route exact path="/jobs/manufacturing" element={<JobListManufacture />} />
        <Route exact path="/jobs/banking" element={<JobListBank />} />
        <Route exact path="/jobs/food" element={<JobListFood />} />
        <Route exact path="/jobs/retail" element={<JobListRetail />} />
        <Route exact path="/jobs/customer-service" element={<JobListCustomer />} />
        <Route exact path="/jobs/engineering" element={<JobListEng />} />
      </Routes>
    </Router>
  );
}

export default App;