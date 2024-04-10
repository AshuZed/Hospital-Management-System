import react from 'react';
import App from './App';
import {Route, Routes} from 'react-Dom';
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
