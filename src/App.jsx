import { useEffect, useState } from 'react'
import axios from "axios";
import Signup from './Pages/Signup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Login } from './Pages/Login';
import  Profile  from './Pages/Profile';
import ProtectedRoute from './Routes/ProtectedRoute';


function App() {

return (
 <>
<Router>
  <Routes>

              {/* Public Routes */}
       <Route path="login" element={<Login/>}/> 
       <Route path="signup" element={<Signup/>}/> 
    

          {/* //Protected Routes */}
         <Route path="profile" element={
            <ProtectedRoute>
               <Profile />
            </ProtectedRoute> 
          }/>
             
  </Routes>
</Router>

</>
)}
  

export default App





