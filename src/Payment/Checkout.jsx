import { useParams, useSearchParams } from "react-router-dom";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createPaymentAPI } from "../apis/StripePayment/StripePayment";

export default function Checkout() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  const plan = params.plan;
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const mutation = useMutation({
    mutationFn: createPaymentAPI,
  });

  // console.log(params);
  // console.log(searchParams);
  // console.log(amount);
  // console.log(plan);

  // handling the submit for the payment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (elements === null) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    }
    try {
      // prepare the data for the payment
      const data = {
        amount,
        plan,
        
      };
      await mutation.mutateAsync(data);
      console.log(mutation);

      // console.log("this is clientSecret ", mutation?.data?.clientSecret);
      // console.log("this is paymentId ", mutation?.data?.paymentId);

      // make the http request
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: `${mutation?.data?.clientSecret}`,
        // clientSecret: `pi_3Od5PFSFdvILEADb1mrVMi6i_secret_g0bHfPaS3amee4hy1R1lvbTWM`,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
      }); 
      if (error) {
        setErrorMessage(error?.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.message);
    }
  };
  return (
    <div className="bg-gray-900 -mt-4 h-screen flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-96 mx-auto my-4 p-6 bg-white rounded-lg shadow-md "
      >
        <div className="mb-4">
          <PaymentElement />
        </div>
        <button
          className="w-full py-2 px-4 border border-transparent rounded-md 
        shadow-sm text-sm font-medium text-white
         bg-gradient-to-r from-purple-500 to-blue-500
          hover:from-indigo-600 hover:to-blue-600 focus:outline-none
           focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Make a Payment
        </button>
        {errorMessage && (
          <div className="text-red-500 mt-5">{errorMessage}</div>
        )}
      </form>
    </div>
  );
}
