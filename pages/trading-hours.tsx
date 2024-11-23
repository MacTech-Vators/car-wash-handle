/* eslint-disable @typescript-eslint/no-explicit-any */
// frontend/pages/tradinghours.tsx
/*import TradingHours from '../components/TradingHours';

const TradingHoursPage = () => {
  return (
    <div>
      <TradingHours formData={undefined} setFormData={function (): void {
        throw new Error('Function not implemented.');
      } } setStep={(): void => {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default TradingHoursPage;
*/
import React, { useState } from "react";
//import TradingHoursForm from "./TradingHoursForm";
import TradingHoursForm from "@/components/TradingHours";


const App: React.FC = () => {
  const [tradingHours, setTradingHours] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });

  return (
    <div>
      <h1>Car Wash Management</h1>
      <TradingHoursForm formData={tradingHours} setFormData={setTradingHours} />
    </div>
  );
};

export default App;
