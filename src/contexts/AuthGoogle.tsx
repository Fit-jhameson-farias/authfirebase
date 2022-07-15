import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../_config/firebase.config";

interface IAuthGoogle {
  children?: any;
}
const provider = new GoogleAuthProvider();
export const AuthGoogleContext = React.createContext({});

export const AuthGoogle: React.FC<IAuthGoogle> = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = React.useState({});

  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token!);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <AuthGoogleContext.Provider value={{ signWithGoogle, signed: !!user }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
