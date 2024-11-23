// frontend/utils/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to fetch data from API
export const getData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Helper function to post data to API
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
