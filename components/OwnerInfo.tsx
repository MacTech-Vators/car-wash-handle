/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// frontend/components/OwnerInfo.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../utils/api';
import axios from 'axios';

interface OwnerInfoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    name_surname: string;
    id_number: string;
    date_of_birth: string;
    age_range: '18-35' | '36-55' | '55+';
    gender: 'Male' | 'Female' | 'Others';
    contact_number: string;
    email_address: string;
    nacwo_joining_date: string;
  }
  const ownerData: OwnerInfoProps = {
    date_of_birth: '1990-01-01',
    name_surname: 'John Doe',
    id_number: '1234567890123',
    formData: undefined,
    setFormData: function (value: any): void {
      throw new Error('Function not implemented.');
    },
    setStep: function (value: React.SetStateAction<number>): void {
      throw new Error('Function not implemented.');
    },
    age_range: '18-35',
    gender: 'Male',
    contact_number: '',
    email_address: '',
    nacwo_joining_date: ''
  };
  
  console.log(ownerData.date_of_birth);
  
const OwnerInfo: React.FC<OwnerInfoProps> = ({ formData, setFormData, setStep }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [isUsingPassport, setIsUsingPassport] = useState(false);



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    /*console.log("Submitted Data: ", data);
    setFormData({ ...formData, ownerInfo: data });
    setStep(2); // Move to next step
    try {
      await api.post('/user', data); // Assuming the user API endpoint
      setNextStep(true);
    } catch (error) {
      console.error('Error creating owner:', error);
    }*/
      setStep(1);
      try {
        const response = await axios.post("http://localhost:5000/api/submit", formData); // Replace with your backend endpoint
        console.log("Submission successful:", response.data);
  
        // Proceed to the next step if submission is successful
       
        await api.post('/user', data); // Assuming the user API endpoint
      setNextStep(true);

      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Axios error handling
          console.error("Axios error:", error.response?.data || error.message);
        } else if (error instanceof Error) {
          // General error handling
          console.error("General error:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
      console.log(data.date_of_birth);
  };
/*
  const validateSouthAfricanID = (id: string) => {
    // South African ID validation logic
    const regex = /^\d{13}$/; // ID must be 13 digits
    if (!regex.test(id)) return "Invalid South African ID format.";
    // Add Luhn algorithm or date validation if needed
    return true;
  };
*/
const validateIdNumber = (value: string, idType: string) => {
  if (idType === 'id') {
    // South African ID validation (13-digit number, no letters)
    const idRegex = /^[0-9]{13}$/;
    if (!idRegex.test(value)) {
      return 'Invalid South African ID';
    }
  } else if (idType === 'passport') {
    // Passport validation (e.g., alphanumeric, between 6-9 characters)
    const passportRegex = /^[A-Za-z0-9]{6,9}$/;
    if (!passportRegex.test(value)) {
      return 'Invalid Passport Number';
    }
  }
  return true; // Valid input
};

  const validateContactNumber = (number: string) => {
    const regex = /^\+?27\d{9}$/; // +27 followed by 9 digits
    if (!regex.test(number)) return "Invalid South African phone number.";
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Owner Information</h2>

      {/* Name Surname */}
      <div>
        <input
          {...register("name_surname", { required: "Name is required" })}
          placeholder="Full Name(s)"
          title="Enter your full name as it appears on your ID or Passport."
        />
      </div>
      <br />
      <div>
      <input
          {...register("name_surname", { required: " Last Name is required" })}
          placeholder="Last Name"
          title="Enter your last name as it appears on your ID or Passport."
        />
      </div>

      {/* ID or Passport */}
      <div>
        <label>
          <input
            type="radio"
            name="id_type"
            value="id"
            defaultChecked
            onClick={() => {
              setIsUsingPassport(false);
              setValue("id_number", "");
            }}
          />
          South African ID
        </label>
        <label>
          <input
            type="radio"
            name="id_type"
            value="passport"
            onClick={() => {
              setIsUsingPassport(true);
              setValue("id_number", "");
            }}
          />
          Passport
        </label>
      </div>

      <div>
       <input
          {...register("id_number", {
            required: "ID or Passport is required",
            _validate: isUsingPassport
              ? (value: any) => (value ? true : "Passport number is required.")
              : validateIdNumber,
            get validate() {
              return this._validate;
            },
            set validate(value) {
              this._validate = value;
            },
          })}
          placeholder={isUsingPassport ? "Passport Number" : "South African ID"}
          title={
            isUsingPassport
              ? "Enter your Passport Number."
              : "Enter your 13-digit South African ID."
          }
        />
        {/* <input
        {...register('id_number', {
          validate: (value) => {
            if (idType === 'South African ID') {
              return isValidSouthAfricanID(value) || 'Invalid South African ID';
            }
            if (idType === 'Passport') {
              return isValidPassport(value) || 'Invalid Passport Number';
            }
            return 'Passport number is required.';
          },
        })}
        placeholder="Enter ID Number or Passport"
      />*/}
      </div>

{/* Date of Birth */}
<input
    type="date"
    {...register('date_of_birth', { required: true })}
    placeholder="Date of Birth"
    data-hover="Enter a valid Date of birth as per ID number"
  />
  {Error.date_of_birth && <p>Date of birth is required</p>}

  {/* Age Range */}
  <select {...register('age_range', { required: true })}>
    <option value="">Select Age Range</option>
    <option value="18-35">18-35</option>
    <option value="36-55">36-55</option>
    <option value="55+">55+</option>
  </select>
  {Error.age_range && <p>Age range is required</p>}

  {/* Gender */}
  <select {...register('gender', { required: true })}>
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
  </select>
  {Error.gender && <p>Gender is required</p>}

      {/* Contact Number */}
      <div>
        <input
          {...register("contact_number", {
            required: "Contact number is required.",
            validate: validateContactNumber,
          })}
          placeholder="Contact Number"
          title="Enter a valid South African contact number starting with +27."
          data-hover="Provide your primary contact number."
        />
      </div>

      {/* Email Address */}
      <div>
        <input
          {...register("email_address", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format.",
            },
          })}
          placeholder="Email Address"
          title="Enter a valid email address."
          data-hover="Enter a valid email address."
        />
      </div>

       {/* NACWO Joining Date */}
  <input
    type="date"
    {...register('nacwo_joining_date', { required: true })}
    placeholder="Joining Date"
    data-hover="Enter a joining date."
  />
  {Error.nacwo_joining_date && <p>Joining date is required</p>}

      <input type="submit" value="Next" />
    </form>
  );
};


export default OwnerInfo;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setNextStep(_arg0: boolean) {
    throw new Error('Function not implemented.');
}
function isValidSouthAfricanID(value: any): import("react-hook-form").ValidateResult | Promise<import("react-hook-form").ValidateResult> {
  throw new Error('Function not implemented.');
}

function isValidPassport(value: any): import("react-hook-form").ValidateResult | Promise<import("react-hook-form").ValidateResult> {
  throw new Error('Function not implemented.');
}

