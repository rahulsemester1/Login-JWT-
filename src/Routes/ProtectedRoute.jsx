import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
   
let [isAuthenticated1,setAuthenticated1]=useState(false);
const [isLoading, setIsLoading] = useState(true);


useEffect(()=>{
   let apiCall=async()=>{  
   try{  
    let token=JSON.parse(localStorage.getItem("token")) 

    let response=await axios.post("/api/v1/profile",{},{
      headers:{
         "authorization":`Bearer ${token}`,
         "content-type":"application/json"     
       }, 
   });
   
   if(response.status === 200 && response.data.status){
      setAuthenticated1(true);
      console.log(response)    
   }  
}
   catch(error){
      console.error("Error fetching profile:", error.message);
   }finally{
      setIsLoading(false);
   }
}

apiCall();

},[])

if (isLoading) {
   return <div>Loading...</div>; // Or your loading component
 }

return (
  <>   
     <div>{isAuthenticated1?children:<Navigate to="/signup"/>}</div>
   </>
  )
}

export default ProtectedRoute