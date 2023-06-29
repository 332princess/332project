import axios from 'axios';

export const register = async (name, email, password) => {
  try {
    const response = await axios.post('http://192.168.0.54:8081/users', {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to register:', error);
    throw error;
  }
};
