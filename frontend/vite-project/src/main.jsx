import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";
import './index.css'
import Routes from "./Routes";
import {
  RouterProvider
 
} from"react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
     <div className="">
      <div className="mt-10 ml-10 mr-10">
      <RouterProvider router={Routes} />
      
      </div>
      </div>
      </AuthProvider>
);
