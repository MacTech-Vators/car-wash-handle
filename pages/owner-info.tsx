/* eslint-disable @typescript-eslint/no-explicit-any */
// frontend/pages/owner.tsx

import FormSteps from '../components/FormSteps';
import Header from '../components/Header';
import OwnerInformationForm from '../components/OwnerInfo';


  
const OwnerPage = () => {
  return (
    <div>
      {/*{step === 1 && (
        <OwnerInformationForm
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}*/}
        <Header title="Owner Info" />
        <FormSteps formData={{
        ownerInfo: undefined,
        userInfo: undefined,
        carWashInfo: undefined,
        tradingHours: undefined
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }} setFormData={function (): void {
        throw new Error('Function not implemented.');
      } } setStep={(): void => {
        throw new Error('Function not implemented.');
      } } />
      <OwnerInformationForm formData={undefined} setFormData={(): void => {
        throw new Error('Function not implemented.');
      } } setStep={(): void => {
        throw new Error('Function not implemented.');
      } } name_surname={''} id_number={''} date_of_birth={''} age_range={'18-35'} gender={'Male'} contact_number={''} email_address={''} nacwo_joining_date={''} />
    </div>
  );
};

export default OwnerPage;
