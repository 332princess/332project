import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8081/logins', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to login:', error);
    throw error;
  }
};
