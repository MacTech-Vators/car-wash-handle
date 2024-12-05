// frontend/components/UserInfo.tsx
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

const UserInfo: React.FC<OwnerInfoProps> = ({ formData, setFormData, setStep }) => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setFormData({ ...formData, ownerInfo: data });
    setStep(3); // Move to next step
    try {
      await api.post('/user', data); // Assuming the user API endpoint
      setNextStep(true);
    } catch (error) {
      console.error('Error creating owner:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Information</h2>
      <input {...register('username')} placeholder="Username" />
      <input {...register('user_password')} placeholder="Password" />
      <input {...register('user_role')} placeholder="Role" />
      <input type="submit" value="Next" />
    </form>
  );
};

export default UserInfo;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setNextStep(_arg0: boolean) {
    throw new Error('Function not implemented.');
}

*/
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/styles/Form.module.scss';

type UserInfo = {
  username: string;
  password: string;
  confirm_password: string;
  role: 'Admin' | 'Employee' | 'Customer';
  email: string;
};

type UserInfoFormProps = {
  onSubmit: (data: UserInfo) => void;
  formData: UserInfo; // Add this if formData is necessary
  setFormData: (value: UserInfo) => void; // Optional, depending on usage
  setStep: (value: number) => void; // If step navigation is required
};

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInfo>();

  const password = watch('password');

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.header}>User Information</h2>

      {/* Username */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className={styles.inputField}
          id="username"
          type="text"
          {...register('username', { required: 'Username is required' })}
          placeholder="Enter username"
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      {/* Password */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className={styles.inputField}
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must be at least 8 characters' },
          })}
          placeholder="Enter password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      {/* Confirm Password */}
      <div className="form-group">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          className={styles.inputField}
          id="confirm_password"
          type="password"
          {...register('confirm_password', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          placeholder="Confirm password"
        />
        {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
      </div>

      {/* Role */}
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          className={styles.selectField}
          id="role"
          {...register('role', { required: 'Role is required' })}
          defaultValue=""
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Customer">Customer</option>
        </select>
        {errors.role && <span>{errors.role.message}</span>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className={styles.inputField}
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Enter a valid email address',
            },
          })}
          placeholder="Enter email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoForm;
