import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
export default function Cart(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.status !== "Accepted") {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <h1>Cart</h1>
      <Button onClick={()=>{
        props.handleLogout()
      }}>Log Out</Button>
    </>
  );
}
