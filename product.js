import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Form, Button, Input, Header, Label,Modal } from "semantic-ui-react";
export default function Myapp(props) {
  const sizeOptions = [
    { key: "af", value: "Small", text: "Small" },
    { key: "ax", value: "Medium", text: "Medium" },
    { key: "al", value: "L", text: "L" },
    { key: "dzd", value: "XL", text: "XL" },
    { key: "dz", value: "XXL", text: "XXL" },
  ];
  let navigate = useNavigate();
  const [product_details, set_product_details] = useState({
    title: "",
    description: "",
    color: "",
    size: "",
    image: "",
  });
  const[open,setOpen]=useState(false)
useEffect(()=>{
  if(props.status!=="OK")
  {
    navigate("/login")
  }
 
},[])
  const validateData = () => {
    let { title, description, color, size, image } = product_details;
    if (
      title === "" ||
      description === "" ||
      color === "" ||
      size === "" ||
      image === ""
    ) {
      alert("fields cannot be empty");
    } else if (title.length < 3 || title > 15) {
      alert("title");
    } else if (description.length < 15 || description > 100) {
      alert("description");
    } else if (color.length < 3 || color.length > 10) {
      alert("color");
    } else {
      let formData = new FormData();
      formData.append("title", product_details.title);
      formData.append("description", product_details.description);
      formData.append("color", product_details.color);
      formData.append("size", product_details.size);
      formData.append("img", product_details.image[0]);
      fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          // 'Content-Type':'application/json'
        },
        body:formData
      }).then((res) => {
        console.log(res,"response")
        console.log(res.status);
      }).catch((err)=>{
        console.log(err,"error occured")
      })
    }
    set_product_details({
      title: "",
      description: "",
      color: "",
      size: "none",
      image: "none",
    })
  };
  return (
    <>
    <Modal
      open={open}
    >
     
      <Modal.Content>
        <Modal.Description>
          <Header>HI!! Admin</Header>
          <Header>Are you sure you want this product</Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {validateData()
            setOpen(false)
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
      <Form
        style={{
          backgroundColor: "antiquewhite",
          padding: "90px",
          borderRadius: "15px",
          marginTop: "10px",
        }}
      >
        <Header style={{ fontSize: "40px" }}>Product Details</Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="title"
            value={product_details.title}
            onChange={(e) => {
              set_product_details({
                ...product_details,
                title: e.target.value,
              });
            }}
          />
          <Form.Input
            fluid
            label="Description"
            placeholder="description"
            value={product_details.description}
            onChange={(e) => {
              set_product_details({
                ...product_details,
                description: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="color"
            placeholder="color"
            style={{ width: "200px" }}
            value={product_details.color}
            onChange={(e) => {
              set_product_details({
                ...product_details,
                color: e.target.value,
              });
            }}
          />
          <Form.Select
            fluid
            label="size"
            placeholder="size"
            options={sizeOptions}
            onChange={(e, data) => {
              set_product_details({ ...product_details, size: data.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Label>Product Image</Label>
          <input
            type="file"
            style={{ width: "25%" }}
            label="image"
            onChange={(e) => {
              set_product_details({
                ...product_details,
                image: e.target.files,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Button
            primary
            onClick={()=>setOpen(true)}
          >
            Submit
          </Form.Button>
          <Form.Button
            secondary
            onClick={()=>navigate("/admindashboard")}
          >
            Cancel
          </Form.Button>
        </Form.Group>
      </Form>
    </>
  );
}
