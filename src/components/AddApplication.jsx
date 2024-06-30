import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

const AddApplication = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    dateApplied: '',
    status: '',
    salary: '',
  });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.companyName === '') newErrors.companyName = 'Company Name is required';
    if (formData.role === '') newErrors.role = 'Role is required';
    if (formData.status === '') newErrors.status = 'Status is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    ref.current.continuousStart();
    axios.post('https://job-application-tracking-api-default-rtdb.firebaseio.com/formData.json', formData)
      .then(res => {
        setLoading(false);
        ref.current.complete();
        setTimeout(() => {
          // Reset form data after successful submission
          setFormData({
            companyName: '',
            role: '',
            dateApplied: '',
            status: '',
            salary: '',
          });
          // Show success message
          setSubmitSuccess(true);
          // Hide success message after 3 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 3000);
        }, 1000);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        ref.current.complete();
      });

    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <LoadingBar color='#f11946' ref={ref} />
      <div style={{ maxWidth: '600px', margin: '6rem auto', padding: '20px', outline:'none', borderRadius: '8px' }}>
        <h2>Add Job Application</h2>
        {submitSuccess && (
          <div style={{ marginBottom: '15px', backgroundColor: '#d4edda', color: '#155724', padding: '10px', border: '1px solid #c3e6cb', borderRadius: '4px' }}>
            Application submitted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                borderColor: errors.companyName ? 'red' : '',
              }}
              placeholder="Enter company name"
            />
            {errors.companyName && (
              <div style={{ color: 'red', marginTop: '5px' }}>{errors.companyName}</div>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                borderColor: errors.role ? 'red' : '',
              }}
              placeholder="Enter role"
            />
            {errors.role && (
              <div style={{ color: 'red', marginTop: '5px' }}>{errors.role}</div>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Date Applied</label>
            <input
              type="date"
              name="dateApplied"
              value={formData.dateApplied}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                borderColor: errors.status ? 'red' : '',
              }}
            >
              <option value="" disabled>Select status</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
            {errors.status && (
              <div style={{ color: 'red', marginTop: '5px' }}>{errors.status}</div>
            )}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                
              }}
              placeholder="Enter salary"
            />
          </div>

          <button
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddApplication;
