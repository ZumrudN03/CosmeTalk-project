import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import UserTokenProvider from "./Context/UserTokenContext.jsx";
// import SearchProvider from "./Context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <SearchProvider> */}
        <UserTokenProvider>
          <App />
        </UserTokenProvider>
      {/* </SearchProvider> */}
    </HelmetProvider>
  </React.StrictMode>
);
