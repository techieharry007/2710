import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Header, Input } from "semantic-ui-react";
export default function Signup(props) {
  const navigate = useNavigate();
  const [creatUser, setCreateUser] = useState({
    username: "",
    password: "",
    isadmin: false,
  });
  let { username, password, isadmin } = creatUser;

  const addUser = () => {
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creatUser),
    }).then((res) => {
      console.log(res.status);
      // props.checkStatus(res.statusText)
    });
  };
  return (
    <>
      <Form style={{width: "33rem",
    background: "beige",
    display: "grid",
    padding: "0px 2rem",
    alignItems: "baseline",
    marginLeft: "24rem",
    marginTop: "10rem",
    padding:"12px"}}>
      <Header>Signup</Header>
        <Input
        placeholder="username"
          value={username}
          onChange={(e) => {
            setCreateUser({ ...creatUser, username: e.target.value });
          }}
        />
        
        
        <Input
        placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setCreateUser({ ...creatUser, password: e.target.value });
          }}
        />
        
        
        <Button
          primary
          onClick={() => {
            addUser();
            navigate("/login")
          }}
        >
          Submit
        </Button>
       
      </Form>
    </>
  );
}
