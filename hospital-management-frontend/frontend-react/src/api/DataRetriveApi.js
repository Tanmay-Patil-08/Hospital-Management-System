import {apiClient} from './ApiClient'

export const retriveAllPatient = ()=> apiClient.get('/admin/patients')
export const retrivePatientById = (id)=> apiClient.get(`/admin/patients/${id}`)

export const retriveAllArchivePatient = ()=> apiClient.get('/admin/archive/patients')
export const retriveArchivePatientById = (id)=> apiClient.get(`/admin/archive/patients/${id}`)

export const deletePatientById = (id)=> apiClient.delete(`/admin/patients/${id}`)

export const updatePatientById = (id,patient)=> apiClient.put(`/admin/patients/${id}`,patient)
export const createNewPatient = (patient)=> apiClient.post(`/admin/patients`,patient)

export const countOfActivepatient = ()=> apiClient.get(`/admin/patients/count`)