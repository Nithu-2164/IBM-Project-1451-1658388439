import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import swal from 'sweetalert';
import './register.css';

const Register = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                swal("Successfull registration", "Welcome to Dashboard", "success");
                navigate('/app/dashboard');
            }
            else {
                swal("Passwords mismatch", "Retype passwords", "warning");
            }
        }
        else {
            swal("Something went wrong", "Please try again!", "error");
        }
    };



    return (
        <div className="register">
            <form className="registerForm" >
                <h1 className="registerTitle">Registration Form</h1>
                <br />
                <div className="registerInputContainer" >
                    <label className="registerLabelField">Username</label>
                    <input required placeholder="Username" type="text" className="registerInputField" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="registerInputContainer" >
                    <label className="registerLabelField">Email</label>
                    <input required placeholder="Email" type="email" className="registerInputField" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="registerInputContainer" >
                    <label className="registerLabelField">Password</label>
                    <input required placeholder="Password" type="password" className="registerInputField" onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="registerInputContainer" >
                    <label className="registerLabelField">Confirm Password</label>
                    <input required placeholder="Confirm Password" type="password" className="registerInputField" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <button onClick={handleRegister} className="registerBtn" >Register</button>
                <div>
                    <p style={{ fontSize: "14px", marginBottom: "30px" }}>Already have an account? <Link to="/login" style={{ textDecoration: "none", marginLeft: "5px" }}>Click to Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;