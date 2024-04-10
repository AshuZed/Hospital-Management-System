import React from "react";
import "./DoctorPage.css";
import { Link } from "react-router-dom";

const DoctorPage = () => {
  return (
    <div>
      <div className="section-button2">
        <h2>NEW LIFE General Hospital</h2>
        <></>
        <p> we care and it shows</p>
      </div>

      <div className="doctor-page">
        <div className="section-column">
          <Link to="/App1">
            <button className="section-button">Patient Information</button>
          </Link>
          <Link to="/LabTestRequestPage">
            <button className="section-button">Laboratory Request</button>
          </Link>
          <Link to="/Medical">
            <button className="section-button">Imaging Request</button>
          </Link>
          <Link to="/PrescriptionFormPage">
            <button className="section-button">Prescription</button>
          </Link>
        </div>
        <div className="section-column">
          <Link to="/Medical">
            <button className="section-button">Laboratory Result</button>
          </Link>
          <Link to="/Medical">
            <button className="section-button">Imaging Result</button>
          </Link>
          <Link to="/ReferralForm">
            <button className="section-button">Referral</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
