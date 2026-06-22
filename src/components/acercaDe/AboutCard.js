import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            En este apartado podrás explorar las diferentes <span className="purple"> categorías </span>{" "}
            de productos que <span className="purple">Gongo</span> tiene disponibles.
            <br />
            Pone a tu disposición una amplia variedad de productos, como{" "}
            <span className="purple">artesanías y decoración</span>, {" "}
            <span className="purple">textiles y calzado</span>,
            
            <span className="purple">alimentos</span>,{" "}
            <span className="purple">utensilios</span> y <span className="purple">plantas</span>.
            <br />
            <br />
            Te mostraremos productos que se encuentren:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Mi ubicación
            </li>
            <li className="about-activity">
              <ImPointRight /> Alrededores
            </li>
            <li className="about-activity">
              <ImPointRight /> Todos
            </li>
          </ul>

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
