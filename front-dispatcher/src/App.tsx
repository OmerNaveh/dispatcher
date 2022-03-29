import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import GlobalStyle from "./GlobalStyle";
import AuthenticatedRoute from "./Routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "./Routes/NotAuthenticatedRoute";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      <GlobalStyle />
      {isLoading && <LoadingScreen />}
      {isAuthenticated ? <AuthenticatedRoute /> : <NotAuthenticatedRoute />}
    </div>
  );
}

export default App;
