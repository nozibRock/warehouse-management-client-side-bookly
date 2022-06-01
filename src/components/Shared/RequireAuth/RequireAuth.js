import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loader from "../Loader/Loader";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  console.log('inside require auth', user);
  const location = useLocation();
  const [sendEmailVerification, sending] =useSendEmailVerification(auth);
  if(loading) {
    return <Loader></Loader>
  }
  if (!user) {
      return <Navigate to="/signIn" state={{ from: location }} replace />;
  }
  if ( user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
      return <div className="my-10 mx-auto">
        <h3 className="text-red-700">Your email is not verified</h3>
        <h5 className="text-green-600">Please verify your email address</h5>
        {sending ? <Loader></Loader> : ''}
        <button className="py-2 px-6 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-slate-100 font-bold text-base bg-green-900 rounded-sm hover:bg-opacity-90 mx-2"
         onClick={async () => {await sendEmailVerification(); toast('Sent email');}}>send verification Email Again</button>
      </div>;
  }
  return (children)
};

export default RequireAuth;
