import axios from "axios";

// ----User Registration
export const registerAPI = async (userData) => {
  const response = await axios.post(
    "http://localhost:3000/api/v1/users/register",
    {
      email: userData?.email,
      password: userData?.password,
      username: userData?.username,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};


// ----User loin
export const loginAPI = async (userData) => {
  const response = await axios.post(
    "http://localhost:3000/api/v1/users/login",
    {
      email: userData?.email,
      password: userData?.password,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};


// ----User Authentication
export const checkUserAuth = async (userData) => {
  const response = await axios.get(
    "http://localhost:3000/api/v1/users/checkAuth",
    {
      withCredentials: true,
    }
  );
  return response?.data;
};

// ----User logout
export const logoutAPI = async () => {
  const response = await axios.post(
    "http://localhost:3000/api/v1/users/logout",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};