import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";

const App = ({ isLoggedIn }) => (
    <Router>
        <div>{ isLoggedIn ? PrivateComponent() : PublicComponent()}</div>
    </Router>
);

const PublicComponent = () => (
    <div>
        <LoginContainer />
    </div>
);

const PrivateComponent = () => <div>loggedin</div>;

export default App;