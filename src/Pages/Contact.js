import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Card from "../Component/UI/Card";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
 async function formSubmitHandler  (event){
    event.preventDefault();
    const obj={
      name,
      email,
      phone
    }
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Phone Number:", phone);
    // console.log(obj);
      await fetch(
      "https://e-commerce-project-75d20-default-rtdb.firebaseio.com//contacts.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    setName('');
    setEmail('');
    setPhone('');
  
  };

  return (
  <Card>
  
    <Form onSubmit={formSubmitHandler} >
    <h3> Fill This Form, we will get back to you soon</h3>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </Card>
  );
}
