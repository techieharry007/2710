import React, { useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { Link, Route,Routes,useNavigate } from 'react-router-dom'
export default function Admindashboard(props) {
const navigate=useNavigate()
useEffect(()=>{
  if(props.status!=="OK")
  {
    navigate("/login")
  }
  
},[])
  return (
    <>
    ,<Button secondary onClick={()=>{
      props.handleLogout()
    }}>Log Out</Button>
    <h1>Dashboard</h1>
    <Link to="/admindashboard/product">Product</Link>
    <Link to="/admindashboard/userlist" style={{marginLeft:"2rem"}}>App Users</Link>
    </>
  )
}
