import React, { useState } from "react";
import axios from 'axios'
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState(null); // State to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", { email, password });
    try {
      const response = await axios.post("http://localhost:5001/user/register", {
        email,
        password,
      });

      console.log("Response:", response.data);
      alert("Registration successful!"); // Notify user

      // Optionally, clear the form
      setEmail("");
      setPassword("");
    } catch (e) {
      alert("Registration failed!"); 
      //console.error("Error:", err.response?.data || err.message);
      //setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-2 bg-white rounded-2xl outline-1 mt-20 ">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg "
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition mb-5"
          >
            Register
          </button>
        </form>
       
      </div>
    </div>
    </>
  );
};

export default Register;