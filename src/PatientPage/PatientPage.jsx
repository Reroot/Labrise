/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Welcome to Labrise! Your Personal Health Assistant</h2>
            <title>Please enter your log in or register into our Secure Portal</title>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export { LoginPage };*/

import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  Will_Component from "../Will_Component/Will_Component";
import  Scott_Component from "../Scott_Component/Scott_Component";
import  Rory_Component from "../Rory_Component/Rory_Component";
import  Kevin_Component from "../Kevin_Component/Kevin_Component";
import  Artem_Component from "../Artem_Component/Artem_Component";

export class PatientPage extends React.Component{
    render(){
        //const user = useSelector(state => state.authentication.user);
        return (
            <div className="col-lg-8 offset-lg-2">
                {/* <h2>Welcome {user.firstName + " " + user.lastName}</h2> */}
                <h2>Welcome!</h2>
                <title>Review your patient history below</title>
                <Link to="/">Home</Link>
                <Will_Component />
                <Scott_Component />
                <Rory_Component />
                <Kevin_Component />
                <Artem_Component />
            </div>
        );    
    }
}

// export { PatientPage };
