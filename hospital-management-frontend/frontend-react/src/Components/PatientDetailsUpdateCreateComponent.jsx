
import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { createNewPatient, retrivePatientById, updatePatientById } from '../api/DataRetriveApi';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

function PatientDetailsUpdateCreateComponent() {

  const [patient, setPatient] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(
    () => retrivePatient(),
    [id]
  )
  function retrivePatient() {
    if (id != -1) {
      retrivePatientById(id)
        .then(
          response => {
            console.log(response.data)
            setPatient(response.data)
          }
        )
        .catch(error => console.log(error))
    }
  }
  const validationSchema = Yup.object({
    patientName: Yup.string().required('Patient name is required'),
    patientGender: Yup.string().required('Patient Gender is required'),
    patientCovidStatus: Yup.string().required('Patient Covid satus is required'),
    doctorName: Yup.string().required('Doctor name is required'),
    patientphNumber: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Must be 10 digits'),
    patientEmergencyContact: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Must be 10 digits'),
    patientEmail: Yup.string().email('Invalid email format').required('Email is required'),
    patientBloodType: Yup.string().required('Blood type is required').oneOf(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    patientDOB: Yup.date().required('Date of birth is required').max('2023-12-31', 'Date cannot be in the future'),
});

  function onSubmit(values) {
    if (id == -1) {
      const patient = {
        patientName: values.patientName,
        doctorName: values.doctorName,
        patientGender: values.patientGender,
        patientCovidStatus: values.patientCovidStatus,
        patientDOB: values.patientDOB,
        patientMaritalS: values.patientMaritalS,
        patientAddress: values.patientAddress,
        patientphNumber: values.patientphNumber,
        patientEmail: values.patientEmail,
        patientMedicalHistory: values.patientMedicalHistory,
        patientCurrentSymptoms: values.patientCurrentSymptoms,
        patientBloodType: values.patientBloodType,
        patientHealthInsurancenumber: values.patientHealthInsurancenumber,
        patientEmergencyContact: values.patientEmergencyContact,
        patientID: id,
        patientAdmissionDate: "2023-12-26T19:56:33.979258"
      }
      console.log(patient)
      createNewPatient(patient)
        .then(response => {
          // console.log(response)
          navigate('/patients')
        })
        .catch(error => console.log(error))
    } else {
      updatePatientById(id, values)
        .then(response => {
          // console.log(response)
          navigate('/patients')
        })
        .catch(error => console.log(error))
    }


  }

  return (
    <div className='container'>
      <Formik
        initialValues={patient}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        >
        {
          (props) => (
            <Form>
              <div className="patient-details">
                <fieldset>
                  <h3>Patient Name
                  </h3>
                  <Field type='text' name='patientName' />
                  <ErrorMessage name="patientName" component="div" className="text-danger" />
                </fieldset>
                <div className="info-grid">
                  <div className="info-column">
                    <fieldset>
                      <p>
                        Doctor:
                      </p>
                      <Field type='text' className="form-control" name='doctorName' />
                      <ErrorMessage name="doctorName" component="div" className="text-danger" />

                    </fieldset>
                    <fieldset >
                      <p>
                        Gender:
                      </p>
                      <Field type='text' className="form-control" name='patientGender' />
                      <ErrorMessage name="patientGender" component="div" className="text-danger" />

                    </fieldset>
                    <fieldset>
                      <p>
                        COVID Status(true -> +ve , false -> negative):
                      </p>
                      <Field type='text' className="form-control" name='patientCovidStatus' />
                      <ErrorMessage name="patientCovidStatus" component="div" className="text-danger" />

                    </fieldset>
                    <fieldset>
                      <p>
                        Date of Birth:
                      </p>
                      <Field type='date' className="form-control" name='patientDOB' />
                      <ErrorMessage name="patientDOB" component="div" className="text-danger" />

                    </fieldset>
                    <fieldset>
                      <p>
                        Marital Status:
                      </p>
                      <Field type='text' className="form-control" name='patientMaritalS' />
                    </fieldset>
                  </div>
                  <div className="info-column">
                    <fieldset>
                      <p>
                        Address:
                      </p>
                      <Field type='text' className="form-control" name='patientAddress' />
                    </fieldset>
                    <fieldset >
                      <p>
                        Phone Number:
                      </p>
                      <Field type='text' className="form-control" name='patientphNumber' />
                      <ErrorMessage name="patientphNumber" component="div" className="text-danger" />

                    </fieldset>
                    <fieldset>
                      <p>
                        Email:
                      </p>
                      <Field type='text' className="form-control" name='patientEmail' />
                      <ErrorMessage name="patientEmail" component="div" className="text-danger" />

                    </fieldset>
                    <fieldset>
                      <p>
                        Medical History:
                      </p>
                      <Field type='text' className="form-control" name='patientMedicalHistory' />
                    </fieldset>
                    <fieldset>
                      <p>
                        Blood Type:</p>
                      <Field type='text' className="form-control" name='patientBloodType' />
                      <ErrorMessage name="patientBloodType" component="div" className="text-danger" />


                    </fieldset>
                  </div>
                  <div className="info-column">
                    <fieldset>
                      <p>
                        Current Symptoms:
                      </p>
                      <Field type='text' className="form-control" name='patientCurrentSymptoms' />
                    </fieldset>
                    <fieldset >
                      <p>
                        Health Insurance Number:
                      </p>
                      <Field type='text' className="form-control" name='patientHealthInsurancenumber' />
                    </fieldset>
                    <fieldset>
                      <p>
                        Emergency Contact:
                      </p>
                      <Field type='text' className="form-control" name='patientEmergencyContact' />
                      <ErrorMessage name="patientEmergencyContact" component="div" className="text-danger" />

                    </fieldset>
                  </div>
                </div>



              </div>


              <div>
                <button type="submit" className="btn btn-success m-5">
                  {(id == -1) ? "Create new patient" : "Update"}
                </button>
              </div>

            </Form>

          )
        }


      </Formik>
    </div>

  );
}

export default PatientDetailsUpdateCreateComponent;

