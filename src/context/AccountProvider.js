import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(window.localStorage.getItem("account"));
    setAccount(loggedInUser);
  }, []);

  return (
    <AuthContext.Provider value={{ account, setAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AccountProvider;
