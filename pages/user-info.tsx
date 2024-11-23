/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// frontend/pages/user.tsx

import UserInfo from "@/components/UserInfo";



const UserInfoForm = () => {
  return (
    <div>
      <UserInfo formData={undefined} setFormData={function (): void {
        throw new Error("Function not implemented.");
      } } setStep={(): void => {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default UserInfoForm;
