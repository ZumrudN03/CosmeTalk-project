import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import UserTokenProvider from "./Context/UserTokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <UserTokenProvider>
        <App />
      </UserTokenProvider>
    </HelmetProvider>
  </React.StrictMode>
);
