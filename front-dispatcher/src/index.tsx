import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
const domain = "dev-a194tman.us.auth0.com";
const clientId = "Yyn4S2mF60BUYHMbQjOEf2Nn2kXQsVTg";
const redirectTo = "http://localhost:3000/dashboard";
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectTo}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
