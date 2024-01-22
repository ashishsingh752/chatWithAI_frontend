import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { AuthProvider } from "./components/Users/Authcontext.jsx";
const root = document.getElementById("root");
const queryClient = new QueryClient();

const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
    </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </React.StrictMode>
);
