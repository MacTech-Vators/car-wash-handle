/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// frontend/components/TradingHours.tsx
/*import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../utils/api';

interface OwnerInfoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
  }

const TradingHours: React.FC<OwnerInfoProps> = ({ formData, setFormData, setStep }) => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setFormData({ ...formData, ownerInfo: data });
    setStep(2); // Move to next step
    try {
      await api.post('/user', data); // Assuming the user API endpoint
      setNextStep(true);
    } catch (error) {
      console.error('Error creating owner:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Trading Hours</h2>
      <input {...register('day')} placeholder="Day" />
      <input {...register('start_time')} placeholder="Start Time" />
      <input {...register('end_time')} placeholder="End Time" />
      <input type="submit" value="Finish" />
    </form>
  );
};

export default TradingHours;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setNextStep(_arg0: boolean) {
    throw new Error('Function not implemented.');
}
*/
/*import { UserInfo } from 'os';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

type TradingHours = {
  day: string;
  open_time: string;
  close_time: string;
};


type TradingHoursFormProps = {
  onSubmit: (tradingHours: TradingHours[]) => void;

  formData: {
    ownerInfo: any;
    userInfo: any;
    carWashInfo: any;
    tradingHours: any;
  };
  setFormData: Dispatch<any>;
  setStep: Dispatch<SetStateAction<number>>;
};

const TradingHoursForm: React.FC<TradingHoursFormProps> = ({ onSubmit }) => {
  const { register, control, handleSubmit } = useForm<{ trading_hours: TradingHours[] }>({
    defaultValues: {
      trading_hours: [
        { day: 'Monday', open_time: '', close_time: '' },
        { day: 'Tuesday', open_time: '', close_time: '' },
        { day: 'Wednesday', open_time: '', close_time: '' },
        { day: 'Thursday', open_time: '', close_time: '' },
        { day: 'Friday', open_time: '', close_time: '' },
        { day: 'Saturday', open_time: '', close_time: '' },
        { day: 'Sunday', open_time: '', close_time: '' },
      ],
    },
  });

  const { fields, replace } = useFieldArray({
    control,
    name: 'trading_hours',
  });

  const validateTime = (open: string, close: string) => {
    const openDate = new Date(`1970-01-01T${open}`);
    const closeDate = new Date(`1970-01-01T${close}`);
    return openDate < closeDate || 'Closing time must be after opening time.';
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data.trading_hours))}>
      <h2>Trading Hours</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="trading-hours-row">
          <label>{field.day}</label>
          <div className="time-inputs">
            <input
              type="time"
              {...register(`trading_hours.${index}.open_time`, {
                required: 'Opening time is required',
              })}
              placeholder="Open Time"
            />
            <input
              type="time"
              {...register(`trading_hours.${index}.close_time`, {
                required: 'Closing time is required',
                validate: (value) =>
                  validateTime(
                    fields[index].open_time,
                    value
                  ),
              })}
              placeholder="Close Time"
            />
          </div>
        </div>
      ))}
      <button type="submit">Save Trading Hours</button>
    </form>
  );
};

export default TradingHoursForm;
*/

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/styles/Form.module.scss";

interface TradingHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

interface TradingHoursFormProps {
  formData: TradingHours;
  setFormData: React.Dispatch<React.SetStateAction<TradingHours>>;
}

const TradingHoursForm: React.FC<TradingHoursFormProps> = ({
  formData,
  setFormData,
}) => {
  const { register, handleSubmit, reset } = useForm<TradingHours>({
    defaultValues: formData,
  });

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const onSubmit = async (data: TradingHours) => {
    setStep(3);
    try {
      // Simulate API call or save action
      await new Promise((resolve) => setTimeout(resolve, 500)); // Mock delay

      // Update state with saved data
      setFormData(data);

      // Display success message
      setMessage("Trading hours saved successfully!");
      setMessageType("success");

      // Optionally reset the form
      reset(data);
    } catch (error) {
      // Display error message
      setMessage("Failed to save trading hours. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.header}>Trading Hours</h2>

      <label>Monday</label>
      <input {...register("monday")} placeholder="Monday Hours" />

      <label>Tuesday</label>
      <input {...register("tuesday")} placeholder="Tuesday Hours" />

      <label>Wednesday</label>
      <input {...register("wednesday")} placeholder="Wednesday Hours" />

      <label>Thursday</label>
      <input {...register("thursday")} placeholder="Thursday Hours" />

      <label>Friday</label>
      <input {...register("friday")} placeholder="Friday Hours" />

      <label>Saturday</label>
      <input {...register("saturday")} placeholder="Saturday Hours" />

      <label>Sunday</label>
      <input {...register("sunday")} placeholder="Sunday Hours" />

      <input type="submit" value="Save" />

      {/* Message Display */}
      {message && (
        <p
          style={{
            color: messageType === "success" ? "green" : "red",
            marginTop: "10px",
          }}
        >
          {message}
        </p>
      )}
      <input type="submit" value="Register" />
    </form>
  );
};

export default TradingHoursForm;
function setStep(arg0: number) {
  throw new Error("Function not implemented.");
}

