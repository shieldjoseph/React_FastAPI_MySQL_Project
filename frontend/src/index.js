import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.js'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import FirstPage from "./components/firstPage.jsx"

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/FirstPage" element={<FirstPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)