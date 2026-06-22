import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿Qué econtrarás en <span className="purple"> Gongo </span>?
            </h1>
            <p className="home-about-body">
              Gongo ofrece varios productos de productores locales, ya sea de Abasolo, Gto., o de lugares
              cercanos al municipio.
              En nuestro catálogo podrás hallar productos organizados en diversas categorías, 
              como alimentos, moda, productos de limpieza, entre otros.
              <br />
              <br />
              Además, promueve el emprendimiento de los jóvenes
              <i>
                <b className="purple">
                  {" "}
                  CBTis 171{" "},
                </b>
              </i>
              dándoles un espacio para dar seguimiento a los proyectos de emprendimiento 
              que desarrollan en la institución, y así, puedan ofrecer sus productos a la comunidad, atacando puntos de sostenibilidad y crecimiento ecónomico.
              <br />
              <br />
              ¡Anímate a consumir menos y mejor!
              <i>
                <b className="purple">
                  {" "}
                  explora y encuentra alternativas,{" "}
                </b>
              </i>
              a los típicos productos cuya fabricación compromete varios ejes del medioambiente.
                              <b className="purple">
                  {" "}
                  {" "}
                </b>.
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
