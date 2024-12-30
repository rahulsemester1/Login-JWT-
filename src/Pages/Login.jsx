import React,{useState,createContext} from 'react'
import axios from "axios"

import { useNavigate } from 'react-router-dom'

function Login() {
   let [inputVal,setInput]=useState({name:"",email:"",password:"",isLogged:""})

   let navigate=useNavigate();   
 
   function navigateButton(value){
      navigate(`/${value}`)
   }

   let handleInputVal=(e)=>{
      setInput({...inputVal,[e.target.name]:e.target.value})    
   }

   let submitVal=async(e)=>{
      e.preventDefault();
      
      //  console.log(inputVal)
       try{
       let response=await axios.post("/api/v1/login",inputVal)  
      //  console.log(response.data.data.token)
       localStorage.setItem("token",JSON.stringify(response.data.data.token))
       navigate("/profile");
       }
       catch(error){
         console.error(error)
         alert("Something went wrong")
       }
   }

  return (
   <>
   <div className='min-w-screen h-screen flex justify-center items-center bg-gradient-to-r  from-orange-600 to-orange-300 '>
   <div className='flex justify-center border rounded-xl bg-white w-[50rem] h-[550px] py-20 shadow-lg '>
     
            <form onSubmit={submitVal} >
            <div> 
         <p className='text-slate-400'>Start your journey</p>
        <h1 className='text-4xl font-bold'>Login to Shopper</h1>
        </div>

   <div className='my-5'>  
   <span className="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
     person
   </span>     
      < input type="text"
       placeholder="Name" name="name"
       onChange={handleInputVal} 
       className="border border-slate-200 h-[57px]  w-[350px] px-2  bg-slate-200 "
      />     
</div>

<div className='my-5'>
       <span class="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
           mail
       </span>
       <input type="email"
       placeholder=" Email"
       name="email"
       onChange={handleInputVal}
        className="border border-slate-200  w-[350px] px-2 h-[57px]  bg-slate-200 "
      />
      
</div>

<div className='my-5'>
       <span class="material-symbols-outlined  bg-slate-200 h-[57px] p-3">
       lock
       </span>
       <input type="password"
       placeholder="Password"
       name="password"
       onChange={handleInputVal}
        className="border border-slate-200 h-[57px] w-[350px] px-2  bg-slate-200"
      />
</div>
<div>
   <p className='text-center'>Lost Password?<span className='text-blue-700 '>Click here!</span></p>
</div>
<div className='m-6'>   
       
       <button className='h-12 w-[160px] bg-orange-600 m-2 rounded-3xl text-white cursor-pointer' type="submit" >Login</button>
       <button type="button" className='h-12 w-[160px] bg-orange-600 m-2 rounded-3xl text-white cursor-pointer' onClick={()=>navigateButton("signup")}>Sign up</button>   
       {/* <p>Don't Have any account? <span className='underline text-blue-500 cursor-pointer' onClick={()=>navigateButton("signup")}>Signup here</span>  </p> */}
 </div>      
    
     </form>
    </div>
    </div>
   </>
  )
}

export {Login}