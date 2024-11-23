/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// frontend/components/FormSteps.tsx
import React, { useState } from 'react';
import OwnerInfo from './OwnerInfo';
import UserInfo from './UserInfo';
import CarWashInfo from './CarWashInfo';
import TradingHours from './TradingHours';
import TradingHoursForm from './TradingHours';

interface FormStepsProps {
  formData: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ownerInfo: any;
    userInfo: any;
    carWashInfo: any;
    tradingHours: any;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormSteps: React.FC<FormStepsProps> = ({ formData, setFormData }) => {
  const [step, setLocalStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <OwnerInfo formData={formData} setFormData={setFormData} setStep={setLocalStep} name_surname={''} id_number={''} date_of_birth={''} age_range={'18-35'} gender={'Male'} contact_number={''} email_address={''} nacwo_joining_date={''} />;
      case 2:
        return <CarWashInfo formData={formData} setFormData={setFormData} setStep={setLocalStep} />;
      case 3:
        return <TradingHoursForm formData={formData} setFormData={setFormData} setStep={setLocalStep} onSubmit={function (tradingHours: { day: string; open_time: string; close_time: string; }[]): void {
          throw new Error('Function not implemented.');
        } } />;
      case 4:
        return <UserInfo formData={formData} setFormData={setFormData} setStep={setLocalStep} />;
      default:
        return <OwnerInfo formData={formData} setFormData={setFormData} setStep={setLocalStep} name_surname={''} id_number={''} date_of_birth={''} age_range={'18-35'} gender={'Male'} contact_number={''} email_address={''} nacwo_joining_date={''} />;
    }
  };

  return <div>{renderStep()}</div>;
};

export default FormSteps;
