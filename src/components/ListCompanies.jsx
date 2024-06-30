import React, {useState} from 'react'
import Navbar from './Navbar';
import './ListCompanies.css'
import { Link } from 'react-router-dom';
const ListCompanies = () => {
  const startupITCompanies = [
        { name: "Darwinbox", description: "HR management software", website: "https://www.darwinbox.com" },
        { name: "AppVirality", description: "Mobile app growth and marketing", website: "https://www.appvirality.com" },
        { name: "Racetrack.ai", description: "AI-powered sales assistant", website: "https://www.racetrack.ai" },
        { name: "StaTwig", description: "Blockchain-based supply chain solutions", website: "https://www.statwig.com" },
        { name: "SmartVizX", description: "Virtual reality solutions", website: "https://www.smartvizx.com" },
        { name: "Signzy", description: "Digital banking infrastructure", website: "https://www.signzy.com" },
        { name: "Lookup", description: "Local search service", website: "https://www.lookup.to" },
        { name: "NowFloats", description: "Website creation and digital marketing", website: "https://www.nowfloats.com" },
        { name: "Egnify", description: "Education technology solutions", website: "https://www.egnify.com" },
        { name: "Commut", description: "Tech-based urban transportation solutions", website: "https://www.commut.co" },
        { name: "eKincare", description: "Health technology platform", website: "https://www.ekincare.com" },
        { name: "BlueSemi", description: "IoT and smart healthcare solutions", website: "https://www.bluesemi.io" },
        { name: "ValueLabs", description: "IT services and consulting", website: "https://www.valuelabs.com" },
        { name: "vPhrase", description: "AI-powered data analytics", website: "https://www.vphrase.com" },
        { name: "Grene Robotics", description: "Autonomous systems and AI solutions", website: "https://www.grenerobotics.com" },
        { name: "Zebi Data", description: "Blockchain-based data solutions", website: "https://www.zebi.io" },
        { name: "InstaShop", description: "Online grocery delivery service", website: "https://www.instashop.ae" },
        { name: "Zippr", description: "Digital addressing system", website: "https://www.zippr.in" },
        { name: "Zify", description: "Carpooling and ride-sharing platform", website: "https://www.zify.co" },
        { name: "Hug Innovations", description: "Wearable technology", website: "https://www.huginnovations.com" },
        { name: "UrbanKisaan", description: "Urban farming solutions", website: "https://www.urbankisaan.com" },
        { name: "ThinCI", description: "AI hardware and software", website: "https://www.thinci.com" },
        { name: "Cellestial E-Mobility", description: "Electric vehicle manufacturing", website: "https://www.cellestial.com" },
        { name: "Marut Drones", description: "Drone technology", website: "https://www.marutdrones.com" },
        { name: "Smartron", description: "IoT and smart devices", website: "https://www.smartron.com" },
        { name: "Gramener", description: "Data science and analytics", website: "https://www.gramener.com" },
        { name: "Cygni Energy", description: "Renewable energy solutions", website: "https://www.cygni.com" },
        { name: "Skyroot Aerospace", description: "Space technology", website: "https://www.skyroot.in" },
        { name: "FLYY High India", description: "Aviation technology solutions", website: "https://www.flyyhigh.com" },
        { name: "Trell", description: "Social commerce platform", website: "https://www.trell.co" }
      ];
      const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
      // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = startupITCompanies.slice(indexOfFirstItem, indexOfLastItem);
 // Change page
 const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
      <>
          <Navbar />
          <div className="container pagination-container">
      <h1>Startup IT Companies in Hyderabad</h1>
      <div className="card-grid">
        {currentItems.map((company, index) => (
          <div key={index} className="card">
            <h2>{company.name}</h2>
                <p>{company.description}</p>
                <div className="button-container">

                <button className='styled-button'>
                    <Link className='company-link' to={company.website }>
                    Click
                    </Link>
                    </button>
                    </div>
            </div>
            
        ))}
                   <div className="pagination">
        {/* Previous page button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page numbers */}
        {Array.from({ length: Math.ceil(startupITCompanies.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        {/* Next page button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(startupITCompanies.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default ListCompanies
