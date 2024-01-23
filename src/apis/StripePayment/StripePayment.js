import axios from "axios";

export const handleFreeSubscriptionAPI = async () => {
  const response = await axios.post(
    "http://localhost:3000/api/v1/payment/free-plan",
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
