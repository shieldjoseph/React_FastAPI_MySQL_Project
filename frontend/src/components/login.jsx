import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';


const Login = () => {

    const navigate = useNavigate();

    const onCancel = () => {
        navigate("/"); // Handle cancel logic here
    };

	return (
		<div className="App">
			<div className="App-header">
                <h2>Login</h2>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Email:</label>
                        <input type="email" />
                    </div>
                    <br />
                    <div>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <br />
                    <div className="flex">
                        <button className="button" type="submit">Login</button>
                        <button className="button" type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
		</div>
	);
};

export default Login;
