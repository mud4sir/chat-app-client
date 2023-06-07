import React from "react";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

export default function App() {
  const gClient = process.env.REACT_APP_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={gClient}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
