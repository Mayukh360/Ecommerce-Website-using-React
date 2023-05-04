import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Alert } from "react-bootstrap";

export default function Heading() {
  const [visible, setVisible] = useState(true);

  const btnHideHandler = () => {
    setVisible(false);
  };
  return (
    <>
      {visible && (
        <Card className="text-center">
          <Card.Header>Welcome</Card.Header>
          <Card.Body>
            <Card.Title>Exclusive offer valid for 1 day</Card.Title>
            {["danger"].map((variant) => (
              <Alert key={variant} variant={variant}>
                50% OFF ON ALL ITEMS
              </Alert>
            ))}

            <Button onClick={btnHideHandler} variant="primary">
              Close The Tab
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      )}
    </>
  );
}
