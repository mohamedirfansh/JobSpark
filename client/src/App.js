import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import JobList from './pages/jobs/JobList';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </Router>
  );
}

export default App;