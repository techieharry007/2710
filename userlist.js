import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Userlist(props) {
    const navigate=useNavigate()
    useEffect(()=>{
        if(props.status!=="OK")
        {
            navigate("/login")
        }        
    },[])
  return (
    <>
    
    
    <h1>UserList</h1>
    
    
    </>
  )
}
