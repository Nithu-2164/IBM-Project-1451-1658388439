import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import swal from 'sweetalert';
import './login.css';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "aaaa" && password === "aaaa@1111") {
            swal("Successfull Login", "Welcome to Dashboard", "success");
            navigate('/dashboard');
        }
        else {
            swal("Wrong Credentials", "Please try again!", "error");
        }
    };

  

    return (
        <div className="login">
            <form className="loginForm">
                <h1 className="loginTitle">Login Form</h1>
                <br />
                <div className="loginInputContainer" >
                    <label className="loginLabelField">Username</label>
                    <input required placeholder="Username" type="text" className="loginInputField" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="loginInputContainer" >
                    <label className="loginLabelField">Password</label>
                    <input required placeholder="Password" type="password" className="loginInputField" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={handleLogin} className="loginBtn" >Login</button>
                <div>
                    {/* <p style={{ fontSize: "14px", marginTop: "20px", marginBottom: "15px" }}>Forgot password? <Link to="/app/register" style={{ textDecoration: "none", marginLeft: "5px" }}>Click to Reset</Link></p> */}
                    <p style={{ fontSize: "14px", marginBottom: "30px" }}>New user? <Link to="/register" style={{ textDecoration: "none", marginLeft: "5px" }}>Click to Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;