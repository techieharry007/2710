import React, { useContext, useEffect } from "react";
import { useNavigate,Navigate, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Signup from "./components/signup";
import Product from "./components/product";
import Auth from "./components/auth";
import Cart from "./components/cart";
import Admindashboard from "./components/admindashboard";
import Userlist from "./components/userlist";
export const Context=createContext()
function App() {
  const[status,setStatus]=useState(null)
  const navigate=useNavigate()
  useEffect(()=>{
    if(status==="OK")
    {
      navigate("/admindashboard")
    }
    else if(status==="Accepted")
    {
      navigate("/admindashboard/product")
    }
    else{

      navigate("/")

    }
  },[])
  const checkStatus=(value)=>{
    setStatus(value)
    navigate("/admindashboard") 
  }
  const handleLogout=()=>{
    setStatus(null)
    navigate("/login")
  }
  return (
    <>
   <Context.Provider value={{status:status}}>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login checkStatus={checkStatus} status={status}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/admindashboard" element={<Auth><Admindashboard status={status} handleLogout={handleLogout}/></Auth>}/>
      <Route path="/cart" element={<Cart status={status} handleLogout={handleLogout}/>}/>
      <Route path="/admindashboard/product" element={<Product status={status}/>}/>
      <Route path="/admindashboard/userlist" element={<Userlist status={status} />}/>
    </Routes>
    </Context.Provider>
    </>
  );
}

export default App;

