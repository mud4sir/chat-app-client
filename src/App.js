import React from "react";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  const gClient = process.env.REACT_APP_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={gClient}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}
