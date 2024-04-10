import React from 'react';
import './App.css';
import './Navbar.css';
import DoctorPage from './DoctorPage';
import App1 from './App1';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Medical from './Medical';
import LabTestRequestPage from './LabTestRequestPage';
import PrescriptionFormPage from './PrescriptionFormPage';
import ReferralForm from './ReferralForm';


function App() {
  return (
    <div>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={
      <div><DoctorPage />
      <Sidebar/>
      </div>
    }></Route>
      <Route path="/App1" element={<App1/>}></Route>
      <Route path="/Medical" element={<Medical/>}></Route>
      <Route path="/LabTestRequestPage" element={<LabTestRequestPage/>}></Route>
      <Route path="/PrescriptionFormPage" element={<PrescriptionFormPage/>}></Route>
      <Route path="/ReferralForm" element={<ReferralForm/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
