import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className=" flex gap-4">
          <div className="h-10 w-10 rounded">
            <img src={user.picture} alt="" />
          </div>
          <h1>{user.name} </h1>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};

export default LoginButton;