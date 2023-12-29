import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { countOfActivepatient } from '../api/DataRetriveApi';

const WelcomeComponent = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const [count,setCount] = useState()

  useEffect(
    ()=>refreshCount(),[]
  )
  function refreshCount(){
  countOfActivepatient()
  .then(
    response =>{
      setCount(response.data)
    }
  )}

  return (
    <div className='container'>
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Medicover Admin Dashboard</h1>
      <p className="welcome-message">
        It's {dateString}. Get ready to manage patients, appointments, and staff
        efficiently and deliver the best possible healthcare experience.
      </p>
      <div className="dashboard-info">
        <span>
          Today's Appointments: <span className="highlight">13</span>
        </span>
        <span>
          Active Patients: <span className="highlight">{count}</span>
        </span>
        <span>
          Staff Members: <span className="highlight">20</span>
        </span>
      </div>
      <div>
        <div>
        <Link to='/patients'>Manage Active Patients</Link>
        </div>
        <div>
        <Link to='/archive/patients'>Manage Archive Patients</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WelcomeComponent;
