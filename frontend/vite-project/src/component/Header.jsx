import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { NavLink, } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Header() {
  console.log("start")
   const {setUser,user} = useContext(AuthContext);
   //const[username,setUsername]=useState(null)
  useEffect(() => {

    console.log("responsing")
    const fetchData = async () => {
      try {
        
        const response = await axios.get("http://localhost:5001/user/pro",{
          withCredentials: true,
        });
         
       
        setUser(response.data)
      } catch (error) {
        
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchData();
  }, []); // Runs every time the route changes
   
  const logout = async () => {
   
  const response=await axios.post("http://localhost:5001/user/logout", {},{
      withCredentials: true, 
      })  
  console.log(response)
  //cdsetUser(null)
  
 
  };
   const username=user.email
  console.log("hiii")
 
  return (
    <div>
      <nav>
          
        <div className="flex items-center justify-center">
          <NavLink to="/" className="font-bold">Blogs</NavLink>
        </div>  

         
        <div className="flex items-center justify-center gap-x-2 p-4">
        {username&&(
            <>
             <div>
              <NavLink to="new" >create</NavLink>
             </div>
             <a onClick={logout}>logout</a>
            </>
          )}
          {!username&&(
          <>
          <div>
            <NavLink to="login" className="px-6 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to="register" className="px-6 py-2 text-white bg-green-600 rounded-xl hover:bg-green-700 transition">
              Register
            </NavLink>
          </div>
          </>
          )
          }
        </div>
      </nav>
    </div>
  );
}
