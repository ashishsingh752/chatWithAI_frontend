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

export const createPaymentAPI = async (payment) => {
  console.log(payment);
  const response = await axios.post(
    "http://localhost:3000/api/v1/payment/checkout",
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
