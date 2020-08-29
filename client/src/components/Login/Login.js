import React from "react";

const Login = ({ handleInput, username, password, inputSignInButton }) => (
  <div>
    <div>
      <span>Sign In</span>
      <input
        placeholder="username"
        type="text"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <button onClick={inputSignInButton}>
        Sign In
      </button>
      <button>Sign up</button>
    </div>
  </div>
);

export default Login;

