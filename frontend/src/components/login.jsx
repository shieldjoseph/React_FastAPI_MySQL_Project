import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { postLogin } from "../api/loginRequest";


const Login = () => {

    const navigate = useNavigate();

    const onCancel = () => {
        navigate("/"); // Handle cancel logic here
    };

    const [loginData, setLoginData] = useState({
        name: "Shield Joseph",
        email: "shieldjoseph063@gmail.com",
        password: "123456"
    });

    const onLogin = (e) => {
        e.preventDefault();
        postLogin(loginData.name, loginData.email, loginData.password)
            .then(data => {
                console.log('Login successful:', data);
                navigate("/FirstPage");
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

	return (
		<div className="App">
			<div className="App-header">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={loginData.name} onChange={(e) => setLoginData({...loginData, name: e.target.value})} />
                    </div>
                    <br />
                    <div>
                        <label>Email:</label>
                        <input type="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} />
                    </div>
                    <br />
                    <div>
                        <label>Password:</label>
                        <input type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} />
                    </div>
                    <br />
                    <div className="flex">
                        <button className="button" type="submit" onClick={onLogin}>Login</button>
                        <button className="button" type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
		</div>
	);
};

export default Login;
