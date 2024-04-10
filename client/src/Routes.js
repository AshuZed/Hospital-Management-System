import react from 'react';
import App1 from './App1';
import {  Route, Routes } from 'react-router-dom';
import Medical from './Medical';
import LabTestRequestPage from './LabTestRequestPage';
import PrescriptionFormPage from './PrescriptionFormPage';
import ReferralForm from './ReferralForm';

function Routes(){
  return(
</Route>
      <Route path="/App1" element={<App1/>}></Route>
      <Route path="/Medical" element={<Medical/>}></Route>
      <Route path="/LabTestRequestPage" element={<LabTestRequestPage/>}></Route>
      <Route path="/PrescriptionFormPage" element={<PrescriptionFormPage/>}></Route>
      <Route path="/ReferralForm" element={<ReferralForm/>}></Route>
    </Routes>);
  }
