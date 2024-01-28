import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./components/Users/Authcontext.jsx";

///  payment configuration using the stripe
const stripePromise = loadStripe(
  "pk_test_51OT0d1SFdvILEADbqq24aSA2khZIZYkJHdtjf85TqSoVTzNSVDNj9SUQEJgPVpmqAnjPG4cMtHvuTMeO3W9LRCol00EgHIECl1"
);

const options = {
  mode: "payment",
  currency: "usd",
  amount: 1000,
  automatic_payment_methods: {
    enabled: 'card',
  }, 
    
};

const root = document.getElementById("root");
const queryClient = new QueryClient();

const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <App />
        </Elements>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
