// frontend/pages/index.tsx
import React from 'react';
import { useState } from 'react';
import FormSteps from '../components/FormSteps';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <Header/>
      <h1>Welcome to the NACWO Management System</h1>
      {/*<p>This application allows you to manage car wash information, users, and more.</p>
      <button onClick={handleStart}>Get Started</button>*/}
      <FormSteps formData={formData} setFormData={setFormData} setStep={setStep} />
      <Footer/>
  </div>
  );
};

export default IndexPage;
