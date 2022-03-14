import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { routeStrings } from "./strings/strings";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={routeStrings.domain}
      clientId={routeStrings.clientId}
      redirectUri={routeStrings.dashboardPath}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
