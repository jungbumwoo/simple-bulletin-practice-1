import React from "react";
import { Link } from "react-router-dom";

const SignUp = ({ username, password, clickSignUpButton, handleInput}) => (
    <div>
        <div>
            <span>Welcome, Sign Up!! </span>
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
            <Link to="/">
                <button>Sign In</button>
            </Link>
            <button onClick={clickSignUpButton}>Sign up</button>
        </div>
    </div>
);

export default SignUp;