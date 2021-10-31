import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ForgotPassword from './Components/frgtpwd';
import Home from './Components/Home';
import Login from "./Components/Login";
import Profile from "./Components/Profile"
import SignUp from './Components/SignUp';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/login" component={Login}/>
                <Route exact path = "/signup" component={SignUp}/>
                <Route exact path = "/profile" component={Profile}/>
                <Route exact path = "/forgotPassword" component={ForgotPassword}/>
            </Switch>
        );
    }
}

export default App;