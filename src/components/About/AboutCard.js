import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          

          <p style={{ color: "rgb(240, 214, 255)" }}>
            "El precio de cualquier cosa es la cantidad de vida que intercambias por ella."{" "}
          </p>
          <footer className="blockquote-footer">Herny David Thoreau</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
