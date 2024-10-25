import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/employee`,
                { email, password },
                // { withCredentials: true }
            );
            
            if (!response.data.success) {
                toast.error(response.data.message);
            } else {
                toast.success("Logged in successfully!");
                return navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="flex items-center justify-center mt-5 w-50 bg-gray-100">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-6 text-center">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      );
}


export default LoginPage;