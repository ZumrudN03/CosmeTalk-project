import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

export const UserTokenContext = createContext();

function UserTokenProvider({ children }) {
  const [tokenn, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );
  const [decodedToken, setDecodedToken] = useState(null);
  useEffect(() => {
    if (Cookies.get("token")) {
      const decoded = jwtDecode(tokenn);
      setDecodedToken(decoded);
    }
  }, [tokenn]);

  function addToken(values) {
    setToken(values);
    Cookies.set("token", values, { expires: 7, secure: true });
  }

  function logOut() {
    setToken(null);
    setDecodedToken(null);
    Cookies.remove("token");
  }
  const data = { tokenn, decodedToken, addToken, logOut };

  return (
    <UserTokenContext.Provider value={data}>
      {children}
    </UserTokenContext.Provider>
  );
}

export default UserTokenProvider;
