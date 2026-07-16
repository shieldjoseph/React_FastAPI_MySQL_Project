import React from "react";
import { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { PostRegister } from "../api/registerRequest.js";

const Register = () => {

    const navigate = useNavigate();
    
    const onCancel = () => {
        navigate("/");
    };

    const [registerData, setRegisterData] = useState({
        name: "Rionel Canez",
        email: "rionelcanez01@gmail.com",
        password: "1234",
        confirmPassword: "12344"
    });

    const onRegister = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            console.log("Passwords do not match!");
            return;
        }
        else {
            console.log("Register data:", registerData);
            PostRegister(registerData.name, registerData.email, registerData.password)
                .then(data => {
                    console.log('Registration successful:', data);
                })
                .catch(error => {
                    console.error('Registration failed:', error);
                });
        }
        // Handle register logic here
    }
	return (
		<div className="App">
			<div className="App-header">
                <h2>Register</h2>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={registerData.name} onChange={(e) => setRegisterData({...registerData, name: e.target.value})} />
                    </div>
                    <br />
                    <div>
                        <label>Email:</label>
                        <input type="email" value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})} />
                    </div>
                    <br />
                    <div>
                        <label>Password:</label>
                        <input type="password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} />
                    </div>
                    <br />
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} />
                    </div>
                    <br />
                    <div className="flex">
                        <button className="button" type="submit" onClick={onRegister}>Register</button>
                        <button className="button" type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
		</div>
	);
};

export default Register;