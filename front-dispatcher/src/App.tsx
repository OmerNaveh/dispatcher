import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthenticatedRoute from "./Routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "./Routes/NotAuthenticatedRoute";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading);

  return (
    <div className="App">
      {isAuthenticated ? <AuthenticatedRoute /> : <NotAuthenticatedRoute />}
    </div>
  );
}

export default App;
