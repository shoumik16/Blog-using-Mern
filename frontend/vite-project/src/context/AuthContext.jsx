import React from "react";
import { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({}); // Store user data

   
    return (
        <AuthContext.Provider value={{ user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};
