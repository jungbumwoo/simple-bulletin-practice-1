import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/new">
        <button>Sign up</button>
      </Link>
    </div>
  </div>
);

export default Login;

