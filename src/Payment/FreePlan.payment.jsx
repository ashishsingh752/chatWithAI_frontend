import { useMutation } from "@tanstack/react-query";
import React from "react";
import { handleFreeSubscriptionAPI } from "../apis/StripePayment/StripePayment";
import StatusMessage from "../alert/Status.message";

const FreePlanSignup = () => {
  const planDetails = {
    name: "Free",
    price: "$0.00/month",
    features: ["5 Credits", "1 User", "Basic Support"],
  };

  // mutation
  const mutation = useMutation({ mutationFn: handleFreeSubscriptionAPI });
  // handle the confirm payment
  const handleConfirmClick = () => {
    mutation.mutate();
    console.log(mutation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Confirm Your {planDetails.name} Plan
        </h2>

        {/* status message */}
        {mutation?.isError && (
          <StatusMessage
            type="error"
            message={mutation?.error?.response?.data?.error}
          />
        )}

        {mutation?.isPending && (
          <StatusMessage type="loading" message="Loading Please wait..." />
        )}
        {mutation?.isSuccess && (
          <StatusMessage type="error" message="Plan has been Upgraded !!!" />
        )}

        <p className="text-center text-gray-600 mb-4">
          Enjoy our {planDetails.name} plan with no costs involved. Get started
          now and upgrade anytime to access more features.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          {planDetails.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="text-center text-green-600 font-bold mb-6">
          {planDetails.price} - No Payment Required
        </div>
        <button
          onClick={handleConfirmClick}
          className="w-full py-2 px-4 border border-transparent rounded-md 
        shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500
         to-blue-500 hover:from-indigo-600 hover:to-blue-600 
         focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
        >
          Confirm {planDetails.name} Plan : $0.00/month
        </button>
      </div>
    </div>
  );
};

export default FreePlanSignup;
