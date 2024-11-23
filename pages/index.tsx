// frontend/pages/index.tsx
import React from 'react';
import { useState } from 'react';
import FormSteps from '../components/FormSteps';

const IndexPage = () => {

  const [formData, setFormData] = useState({
    ownerInfo: {},
    userInfo: {},
    carWashInfo: {},
    tradingHours: {},
  });

  const [, setStep] = useState(1);

  return (
    <div>
      <h1>Welcome to the NACWO Management System</h1>
      {/*<p>This application allows you to manage car wash information, users, and more.</p>
      <button onClick={handleStart}>Get Started</button>*/}
    
    <FormSteps formData={formData} setFormData={setFormData} setStep={setStep} />
  </div>
  );
};

export default IndexPage;
