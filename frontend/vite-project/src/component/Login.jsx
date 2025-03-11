import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import {Navigate} from 'react-router-dom'
const Login = () => {
  const{setUser}=useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[redirect,setRedirect]=useState(false)
  console.log("asdfarhan")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:5001/user/login", {
      email,
      password,
    },
    
      {
        withCredentials: true, // This enables sending cookies and credentials
      }
    
  )
  if (response.status === 200) {
      //console.log(response.data)
          setUser(response.data)
    setRedirect(true);
  }
 
  };
  if(redirect)
    {
      return <Navigate to={'/'}/>
    }
  return (
    <>
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-2 bg-white rounded-2xl outline-1 mt-20 ">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
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
            Login
          </button>
        </form>
       
      </div>
    </div>
    </>
  );
};

export default Login;
