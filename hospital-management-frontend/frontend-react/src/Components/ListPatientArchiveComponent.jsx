
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { retriveAllArchivePatient } from "../api/DataRetriveApi"


export default function ListPatientArchiveComponent() {

    const message = useState("")
    const [patients,setPatient] = useState([])
    // const authContext = useAuth()
    const navigate = useNavigate()

    useEffect(
        ()=>refreshPatientList(),[]
    )

    function refreshPatientList() {
        retriveAllArchivePatient()
        .then(response =>{
            // console.log(response)
            setPatient(response.data)
        })
        .catch(error => console.log(error))
    }

    function displayPatient(id) {
        navigate(`/patients/details/${id}/2`)
    }


    return (
        <div className="container">

            <h1> Archive Patients</h1>
            {/* {message &&<div className="alert alert-warning">{message}</div>} */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>PatientID</th>
                            <th>PatientName</th>
                            <th>DoctorName</th>
                            <th>PatientGender</th>
                            <th>CovidStatus</th>
                            <th>Admission Date</th>
                            <th>Discharge Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map(
                                patient => (
                                    <tr key={patient.id}>
                                        <td>{patient.id}</td>
                                        <td>{patient.patientName}</td>
                                        <td>{patient.doctorName}</td>
                                        <td>{patient.patientGender}</td>
                                        <td>{patient.patientCovidStatus ? 'Positive' : 'Nagative'}</td>
                                        <td>{patient.patientAdmissionDate}</td>
                                        <td>{patient.patientDischargeDate}</td>
                                        <td><button className="btn btn-info" onClick={()=>displayPatient(patient.id)}>Details</button></td>
                                    </tr>
                                )
                            )
                            
                        }


                    </tbody>
                </table>

            </div>
    )
    
}

