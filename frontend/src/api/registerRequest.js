import axios from "axios";

const api = axios.create({
  	baseURL: "http://192.168.133.107:8000"
});

export async function postRegister(name, email, password) {
    const response = await api.post("/register", { 
		name, 
		email, 
		password 
	});
	return response.data;
};