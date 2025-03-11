import React from "react";
import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route
   
  } from 'react-router-dom';
  import Layout from "./layout/Layout";
import Login from "./component/Login";
import Posts from "./component/Posts";
import Register from "./component/Register";
import New from "./component/New";
const Routes = createBrowserRouter(
    createRoutesFromElements(
      

          <Route path="/" element={<Layout />} >
            
            <Route index element ={<Posts />} />
            <Route path='new' element={<New />}/>
            <Route path="login" element={<Login /> } />
            <Route path="register" element={<Register /> } />
          
      </Route>
    )
  );
  export default Routes