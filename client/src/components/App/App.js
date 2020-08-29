import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import Navigation from "../Navigation/Navigation";
import NavigationContainer from "../Navigation/NavigationContainer";
import SignUpContainer from "../SignUp/SignUpContainer";
import BoardListContainer from "../BoardList/BoardListContainer";

const App = ({ isLoggedIn }) => (
    <Router>
        <div>{ isLoggedIn ? PrivateComponent() : PublicComponent()}</div>
    </Router>
);

const PublicComponent = () => (
    <div>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/new" component={SignUpContainer} />
    </div>
);

const PrivateComponent = () => (
    <div>
        <NavigationContainer />
        <Route exact path="/" component={BoardListContainer} />
    </div>
);

export default App;