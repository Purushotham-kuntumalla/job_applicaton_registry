import React, { useEffect, useState,useRef } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar'
import { FaEdit, FaTrash } from 'react-icons/fa';
const ViewApplications = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const handleGet = async () => {
      try {
        ref.current.continuousStart();
        const response = await axios.get('https://job-application-tracking-api-default-rtdb.firebaseio.com/formData.json');
        const data = response.data;
        const applicationsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setApplications(applicationsArray);
        setLoading(false);
          ref.current.complete();
      } catch (error) {
        console.log(error);
        setLoading(false);
          ref.current.complete();
      }
    };
    handleGet();
  }, []);

  const handleDelete = async (id) => {
    try {
      ref.current.continuousStart();
      await axios.delete(`https://job-application-tracking-api-default-rtdb.firebaseio.com/formData/${id}.json`);
      setApplications(applications.filter(application => application.id !== id));
      setLoading(false);
          ref.current.complete();
    } catch (error) {
      console.log(error);
      setLoading(false);
          ref.current.complete();
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const application = applications.find(app => app.id === id);
    setNewStatus(application.status);
  };

  const handleSave = async (id) => {
    try {
      ref.current.continuousStart();
      await axios.patch(`https://job-application-tracking-api-default-rtdb.firebaseio.com/formData/${id}.json`, { status: newStatus });
      setApplications(applications.map(app => (app.id === id ? { ...app, status: newStatus } : app)));
      setEditingId(null);
      setLoading(false);
      ref.current.complete();
    } catch (error) {
      console.log(error);
      setLoading(false);
          ref.current.complete();
    }
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };
  if (loading) {
    //  return <div className="loader-div"><div className='loader'></div></div>
    
      <div>
        <LoadingBar color='#f11946' ref={ref} />
    </div>
   
  //  return <LoadingBar color='#f11946' ref={ref} />
      
  };
  return (
    <>
      <Navbar />
      <LoadingBar color='#f11946' ref={ref} />
      <div style={{ maxWidth: '800px', margin: '6rem auto', padding: '20px' }}>
        <div className="headdings" style={{
          display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center' , justifyContent:'space-around'
        }}>
        <h2>Job Applications</h2>
        <h2>{applications.length } Applications Added</h2>
        </div>
        
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <div>
            {applications.map(application => (
              <div key={application.id} style={{ marginBottom: '15px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <p><strong>Company Name:</strong> {application.companyName}</p>
                <p><strong>Role:</strong> {application.role}</p>
                <p><strong>Date Applied:</strong> {application.dateApplied}</p>
                <p><strong>Status:</strong> {application.status}</p>
                <p><strong>Salary:</strong> {application.salary}</p>
                {editingId === application.id ? (
                  <>
                    <select value={newStatus} onChange={handleStatusChange} style={{ marginBottom: '10px', padding: '8px', boxSizing: 'border-box' }}>
                      <option value="applied">Applied</option>
                      <option value="interview">Interview</option>
                      <option value="offer">Offer</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button onClick={() => handleSave(application.id)} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px', marginLeft:'10px'  }}>
                       Save
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(application.id)} style={{ padding: '10px 20px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
                    <FaEdit /> Edit
                    </button>
                  </>
                )}
                <button onClick={() => handleDelete(application.id)} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                <FaTrash /> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ViewApplications;
