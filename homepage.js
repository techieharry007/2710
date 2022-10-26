import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Button, Container } from 'semantic-ui-react'
// import * from '../../../../api1810/backend/multer/images/'
export default function Homepage() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/productlist").then((res)=>{
      console.log(res.data)
      setProducts([...res.data])
    })
  },[])
    const navigate=useNavigate()
  return (
    <>
    <Container style={{textAlign:"end",backgroundColor:"Dodgerblue"}}>
        <Button primary style={{marginRight:"40px"}} onClick={()=>{
            navigate("/login")
        }}>Login</Button>
        <Button secondary style={{marginRight:"74px"}}  onClick={()=>{
            navigate("/signup")
        }}>Signup</Button>
    </Container>
    
    </>
  )
}
