import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    
    const onCancel = () => {
        navigate("/");
    };

	return (
		<div className="App">
			<div className="App-header">
                <h2>Register</h2>
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
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" />
                    </div>
                    <br />
                    <div className="flex">
                        <button className="button" type="submit">Register</button>
                        <button className="button" type="button" onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
		</div>
	);
};

export default Register;