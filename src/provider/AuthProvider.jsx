import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(true);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // authentication
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //use name for authentication registration
  const updateUser = (name, UserPicUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: UserPicUrl,
    });
  };
  // sign in part
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // with popup authentication
  const signInPopGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInPopGit = () => {
    setLoader(true);
    return signInWithPopup(auth, gitProvider);
  };
  // signOut
  const signOutUser = () => {
    return signOut(auth);
  };

  // hold user
  useEffect(() => {
    setLoader(true);
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  // const user = { displayName: "delwer hossain" };
  const authInfo = {
    user,
    loader,
    createUser,
    updateUser,
    signInUser,
    signInPopGit,
    signInPopGoogle,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
