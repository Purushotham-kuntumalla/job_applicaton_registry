import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css'; // Assuming you will style the components in this CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const jobPortals = [
  { name: 'AngelList', link: 'https://angel.co/jobs' },
  { name: 'HackerRank Jobs', link: 'https://www.hackerrank.com/jobs/search' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/jobs/' },
  { name: 'We Work Remotely', link: 'https://weworkremotely.com/' },
];

const faq = [
    {
        head: 'How can I improve my technical skills?',
        content: 'Consider your interests and strengths. Frontend focuses on user interface, backend on server-side logic, and full stack on both.'
    },
    {
        head: 'How can I build a strong portfolio?',
        content: 'Include your best projects, ensure they are well-documented, and highlight your skills and problem-solving abilities.'
    },
    {
        head: 'How important is networking in job hunting?',
        content: 'Networking is crucial. Attend tech meetups, connect with professionals on LinkedIn, and engage in online communities. Many job opportunities come through referrals.'
    },
    {
        head: 'How can I prepare for technical interviews?',
        content: 'Practice coding problems on platforms like LeetCode or HackerRank. Review common algorithms and data structures. Mock interviews and peer feedback can also be helpful.'
    },
    {
        head: 'Should I apply for jobs that require more experience than I have?',
        content: "It's okay to apply for jobs that list slightly more experience than you have, especially if you meet most other requirements. Tailor your resume and cover letter to emphasize your skills and eagerness to learn."
    },
    {
        head: 'How do I handle technical interviews effectively?',
        content: "Prepare thoroughly by studying common algorithms, data structures, and practicing coding problems. Familiarize yourself with the company's tech stack and be ready to discuss your past projects in detail."
    }
]
const LandingPage = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const companies = [
      { name: "Darwinbox", description: "HR management software" },
      { name: "AppVirality", description: "Mobile app growth and marketing" },
      { name: "Racetrack.ai", description: "AI-powered sales assistant" },
      { name: "StaTwig", description: "Blockchain-based supply chain solutions" }
    ];
    
    const handleChange = (e) => {
        const {
            name, value
        } = e.target;
        setContactData(prev => ({...prev, [name]:value}))
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        axios.post('https://job-application-tracking-api-default-rtdb.firebaseio.com/contactForms.json', contactData)
            .then(res => {
                
                setContactData({
                    name: '',
                    email: '',
                    message: ''
                });
                alert('Data Posted');
            })
            .catch(error => console.log(error));
        
    }

  const handleGet = () => {
    axios.get('https://job-application-tracking-api-default-rtdb.firebaseio.com/contactForms.json')
    .then(data => console.log(data.data))
  }
  useEffect(handleGet, []);
  const handleNavigation = () => {
    navigate('/startups');
  }
  return (
    <>
    <section className="landing-page">
      <div className="introduction">
        
      </div>

      <h1 className='headding'>How to Apply for Jobs as a Fresher</h1>
      <div className="job-steps">
        <div className="step-card">
          <h2 className='card-head'>1. Identify Your Skill Set</h2>
          <p className='p'>Before you start applying, understand your strengths. Are you more inclined towards frontend, backend, or full stack development?</p>
        </div>
        <div className="step-card">
          <h2 className='card-head'>2. Build Your Portfolio</h2>
          <p className='p'>Create a portfolio showcasing your projects. Use platforms like GitHub to share your code and projects. Ensure your projects are well-documented.</p>
        </div>
        <div className="step-card">
          <h2 className='card-head'>3. Prepare Your Resume</h2>
          <p className='p'>Highlight your skills, projects, and any internships or relevant coursework. Keep it concise and focused on your technical expertise.</p>
        </div>
        <div className="step-card">
          <h2 className='card-head'>4. Start Applying</h2>
          <p className='p'>Apply to job openings that match your skill set. Tailor your resume for each job application to highlight relevant experience.</p>
        </div>
        <div className="step-card">
          <h2 className='card-head'>5. Practice for Interviews</h2>
          <p className='p'>Prepare for technical interviews by practicing coding problems on platforms like LeetCode, HackerRank, and CodeSignal. Brush up on your data structures and algorithms knowledge.</p>
        </div>
        <div className="step-card">
          <h2 className='card-head'>6. Network and Follow Up</h2>
          <p className='p'>Connect with professionals on LinkedIn, attend tech meetups, and follow up on your applications. Networking can open doors to job opportunities.</p>
        </div>
      </div>
        <section className='company-list-section'>
        <h2>
          List Of Companies that are in hyderabad
        </h2>
        <div className="companies-list">
          {
            companies.map((company, i) => (
              <div key={i} className="companyCard">
                <p className='company-name'><span style={{color:'red', textDecoration:'underline'}}>Company Name:</span> { company.name}</p>
                <p className='company-description'><span style={{color:'red',textDecoration:'underline'}}>Description:</span> { company.description}</p>
              </div>
            ))
            }
          </div>
          <div className="btnViewAll">
          <button className='
          view-all' onClick={handleNavigation}>View All <FaArrowRight style={{
            textAlign:'center'
          }}/></button>
          </div>
          
</section>
      
        
      <h2>Job Portals for Freshers</h2>
      <div className="carousel-container">
        <Slider {...settings} className="job-portals">
          {jobPortals.map((portal, index) => (
            <div key={index} className="portal-card">
              <h3>{portal.name}</h3>
              <a href={portal.link} target="_blank" rel="noopener noreferrer">Visit {portal.name}</a>
            </div>
          ))}
        </Slider>
      </div>

      <section className="resources">
        <h2>Additional Resources To Prepare Yourself</h2>
        <ul>
          <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> - Comprehensive coding tutorials</li>
          <li><a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">Codecademy</a> - Interactive coding courses</li>
          <li><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy</a> - Affordable online courses</li>
          <li><a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> - Documentation for web developers</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2 className='testimonials-h2'>Success Stories</h2>
        <div className="testimonial">
          <p>"Following this guide helped me land my first job as a frontend developer. The portfolio tips were especially useful!" - Jane Doe</p>
        </div>
        <div className="testimonial">
          <p>"Networking and applying through the recommended job portals really made a difference in my job search." - John Smith</p>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        
              <div className="faq-2">
              {
                  faq.map((faq, idx) => (
                    <div key={idx} className="faq-item">
                          <h3>{idx +1 }. { faq.head}</h3>
                          <p>{ faq.content}</p>
                  </div>
                  ))
              }
  </div>
             
 
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={contactData.name} required onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={contactData.email} required onChange={handleChange}/>
          </label>
          <label>
            Message:
            <textarea name="message" value={contactData.message} required onChange={handleChange}></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
    <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 Job Application Guide. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </footer>
    </>
  );
};

export default LandingPage;
