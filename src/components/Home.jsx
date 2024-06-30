import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import image from '../../src/backimg.png';
import '../components/Home.css'
import LandingPage from './LandingPage';
const Home = () => {
  const navigate = useNavigate();

  const handleNavigateAdd = () => {
    navigate('/add');
  }
  const handleNavigateApplications = () => {
    navigate('/applications')
  }
  return (
      <div >
          <Navbar />
          <section className='welcome-section'>
              <div className="hero-1">
              <h1>Welcome to Job Tracker</h1>
          <p >Track all your job applications in one place. <br /> Stay organized and manage your job search efficiently.</p>
          <p >Whether you're interested in frontend, backend, or full stack development, we've got you covered with detailed steps, useful resources, and job portals to kickstart your career.</p>
                  <div className="quick-actions">
                      <button className="action-button" onClick={handleNavigateAdd}>
                      Add Application
                      </button>
        
                      <button className="action-button" onClick={handleNavigateApplications}>
                      View Applications
        </button>
      </div>
              </div>
              <div className="hero-2">
                  <img src={image} alt="" className='hero-img'/>
              </div>
      </section>
      <section>
        <LandingPage />
      </section>
    </div>
  );
};

export default Home;
