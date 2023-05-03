import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default function Heading() {
 const[visible, setVisible]= useState(true);

 const btnHideHandler=()=>{
    setVisible(false);
 }
  return (
    <>
    { visible && <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button onClick={btnHideHandler} variant="primary">Close The Tab</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>}
     
    </>
  );
}
