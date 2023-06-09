import React from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const login = () => {
    LoginAPI();
  };
  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={login} className="login-btn">
        Log in to linkedin
      </button>
    </div>
  );
}
