import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firbase.config";

export const AuthContext = createContext();
 const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  
  

  const googleLogIn = () => {
    return signInWithPopup(auth, googleprovider);
  };

  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };


  const logOut= ()=>{

    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { googleLogIn, gitHubLogin,user,logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
