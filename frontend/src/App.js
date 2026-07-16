import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>React**FastAPI**MySQL</p>
				<a className="App-link" href="/login">Login</a>
				<a className="App-link" href="/register">Register</a>
			</header>
		</div>
	)
}

export default App
