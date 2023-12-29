import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
// import { useAuth } from "./security/AuthContext";
import { deletePatientById, retriveAllPatient } from "../api/DataRetriveApi";

export default function ListPatientsComponent() {
    const [message,setMessage] = useState("")
    const [patients,setPatient] = useState([])
    // const authContext = useAuth()
    const navigate = useNavigate()

    useEffect(
        ()=>refreshPatientList(),[]
    )

    function refreshPatientList() {
        retriveAllPatient()
        .then(response =>{
            // console.log(response)
            setPatient(response.data)
        })
        .catch(error => console.log(error))
    }
    function deletePatient(id) {
        deletePatientById(id).then(
            ()=>{
                setMessage(`Delete of Patient with id ${id} successfull`)
                refreshPatientList()
            }
        )
        
    }
    function displayPatient(id) {
        navigate(`/patients/details/${id}/1`)
        
    }
    function updatePatient(id) {
        navigate(`/patients/${id}`)
    }


    function addNewPatient(params) {
        navigate(`/patients/-1`)
        
    }
    return (
        <div className="container">

            <h1> Active Patients</h1>
            {message &&<div className="alert alert-warning">{message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>PatientID</th>
                            <th>PatientName</th>
                            <th>DoctorName</th>
                            <th>PatientGender</th>
                            <th>CovidStatus</th>
                            <th>Update</th>
                            <th>Details</th>
                            <th>Discharge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map(
                                patient => (
                                    <tr key={patient.patientID}>
                                        <td>{patient.patientID}</td>
                                        <td>{patient.patientName}</td>
                                        <td>{patient.doctorName}</td>
                                        <td>{patient.patientGender}</td>
                                        <td>{patient.patientCovidStatus ? 'Positive' : 'Nagative'}</td>
                                        <td><button className="btn btn-warning" onClick={()=>updatePatient(patient.patientID)}>Update</button></td>
                                        <td><button className="btn btn-info" onClick={()=>displayPatient(patient.patientID)}>Details</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>deletePatient(patient.patientID)}>Discharge</button></td>
                                    </tr>
                                )
                            )
                            
                        }


                    </tbody>
                </table>
                <div>
                    <button className="btn btn-success m-5" onClick={addNewPatient}>Add new Patient</button> 
                </div>
            </div>
    )
    
}