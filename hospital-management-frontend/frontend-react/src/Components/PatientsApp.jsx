
import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent';
import ListPatientsComponent from './ListPatientsComponent';
import PatientDetailsComponent from './PatientDetailsComponent';
import ListPatientArchiveComponent from './ListPatientArchiveComponent';
import PatientDetailsUpdateCreateComponent from './PatientDetailsUpdateCreateComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import HeaderComponenet from './HeaderComponent';
import { useAuth } from '../SecurityContext/AuthContext';
import { Navigate } from 'react-router-dom';
import AuthProvider from '../SecurityContext/AuthContext';


function AuthenticationRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated) { return children }
    else {
        return <Navigate to="/" />
    }

}


export default function PatientsApp(){
    return (
        
        <div className='PatientsApp'>
            <AuthProvider>
        <BrowserRouter>
        <HeaderComponenet/>

        <Routes>

                    <Route path="/welcome" element={<AuthenticationRoute><WelcomeComponent/></AuthenticationRoute>} />
                    <Route path="/patients" element={<AuthenticationRoute><ListPatientsComponent/></AuthenticationRoute>} />
                    <Route path="/archive/patients" element={<AuthenticationRoute><ListPatientArchiveComponent/></AuthenticationRoute>} />
                    <Route path="/patients/details/:id/:type" element={<AuthenticationRoute><PatientDetailsComponent/></AuthenticationRoute>} />
                    <Route path="/patients/:id" element={<AuthenticationRoute><PatientDetailsUpdateCreateComponent/></AuthenticationRoute>} />

                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/logout" element={<LogoutComponent/>} />


                    <Route path="*" element={<ErrorComponent/>} />

        </Routes>
        </BrowserRouter>
        </AuthProvider>
        </div>
    )
}

