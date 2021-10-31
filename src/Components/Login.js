import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import PasswordMask from 'react-password-mask';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // <Redirect to="/ticket-list"/>;
    }

    login(e) {
        e.preventDefault();
        // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
        //     alert(error);
        //     });
    }

    signup(e){
        e.preventDefault();
        // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
        //     alert(error);
        //     })
    }

    render() {
        return (
        <div className="m-container">
            <h1>Login</h1>
            <hr/>
            <div className="m-container">
                <form onSubmit={this.submitForm}>
                <div>
                    <label for="exampleInputEmail1">Email address: </label>
                    <br/>
                    <input 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    type="text" 
                    name="email" 
                    id="exampleInputEmail1" 
                    placeholder="you@email.com" />
                </div>
                <div>
                    <label for="exampleInputPassword1">Password: </label>
                    <br/>
                    {/* Margin issue when showing and hiding password */}
                    <input
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    type="password" 
                    name="password" 
                    id="exampleInputPassword1" 
                    placeholder="**********"
                     />
                </div>
                <br/>
                <button 
                    type="submit" 
                    className="button" 
                    onClick={this.login}
                    onSubmit={this.handleSubmit}>Login</button>
                &nbsp;
                <Link className="button-inv" to="/signup">Signup</Link>
                </form>
            </div>
        </div>
        );
    }
}