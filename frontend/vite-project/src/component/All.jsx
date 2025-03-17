import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Posts from './Posts'
import { useState } from 'react'
const All = () => {
    const[p,setposts]=useState([])
    useEffect(() => {  
        console.log("responsing2")
        const fetchData = async () => {
          try {
            
            const response = await axios.get("http://localhost:5001/user/posts")
             console.log(response)
               setposts(response.data)
            
          } catch (error) {
            
            console.error("Error fetching user data:", error);
          }
        };
        
        fetchData();
      }, [])
  return (
    <div>
        {
            p.length>0 && p.map(x=>(
                <Posts {...x} />
            ))
        }
      
    </div>
  )
}

export default All