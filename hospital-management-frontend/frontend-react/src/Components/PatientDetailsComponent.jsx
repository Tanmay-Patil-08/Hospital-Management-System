
import React, { useState } from 'react';
import './styles.css';
import { retriveArchivePatientById } from '../api/DataRetriveApi';
import { retrivePatientById } from '../api/DataRetriveApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function PatientDetailsComponent() {

  useEffect(() => {
    refreshPatientList();
  }, []);


  const [patient,setPatient] = useState({})
  const [isArchive,setArchive] = useState(false)
  const { id, type } = useParams()

  function refreshPatientList() {
    console.log(id,type)
    if (type == 1) {
      retrivePatientById(id)
        .then(response =>{
            console.log(response)
            setPatient(response.data)
        })
        .catch(error => console.error(error))
      
    }else{
      retriveArchivePatientById(id)
        .then(response =>{
            console.log(response)
            setPatient(response.data)
            setArchive(true)
        })
        .catch(error => console.error(error))

    }

}

  return (
    <div className='container'>
    <div className="patient-details">
      <h2>Patient Name: {patient.patientName}</h2>
      <div className="info-grid">
        <div className="info-column">
          <p>ID: {isArchive ? patient.id : patient.patientID}</p>
          <p>Doctor: {patient.doctorName}</p>
          <p>Gender: {patient.patientGender}</p>
          <p>COVID Status: {patient.patientCovidStatus ? "POSITIVE" :"NEGATIVE" }</p>
          <p>Date of Birth: {patient.patientDOB}</p>
          <p>Marital Status: {patient.patientMaritalS}</p>
        </div>
        <div className="info-column">
          <p>Address: {patient.patientAddress}</p>
          <p>Phone Number: {patient.patientphNumber}</p>
          <p>Email: {patient.patientEmail}</p>
          <p>Medical History: {patient.patientMedicalHistory}</p>
          <p>Blood Type: {patient.patientBloodType}</p>
        </div>
        <div className="info-column">
          <p>Current Symptoms: {patient.patientCurrentSymptoms}</p>
          <p>Health Insurance Number: {patient.patientHealthInsurancenumber}</p>
          <p>Emergency Contact: {patient.patientEmergencyContact}</p>
          <p>Admission Date: {patient.patientAdmissionDate}</p>
          {isArchive && <p>Discharge Date: {patient.patientDischargeDate}</p>}
        </div>
      </div>
    </div>
    </div>
  );
}

export default PatientDetailsComponent;

