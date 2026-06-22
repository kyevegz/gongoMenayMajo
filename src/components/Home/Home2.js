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
              ¿Qué es <span className="purple"> Gongo </span> y por qué es importante?
            </h1>
            <p className="home-about-body">
              Gongo es un espacio donde productores locales pueden ofrecer
              sus productos a la comunidad, fomentando el consumo responsable y 
              apoyando a los pequeños negocios. En un mundo donde el consumo masivo y 
              la producción en masa han llevado a una crisis ambiental, Gongo se presenta 
              como una alternativa sostenible y consciente.
              <br />
              <br />
              Es una propuesta de solución para el
              <i>
                <b className="purple">
                  {" "}
                  ODS 12{" "}
                </b>
              </i>
              a través de la promoción de prácticas de consumo y producción responsables,
              fomentando la economía local y reduciendo el impacto ambiental.
              <br />
              <br />
              El progreso que hemos consumido en las últimas décadas,
              ha venido acompañado de una
              <i>
                <b className="purple">
                  {" "}
                  degradación medioambiental,{" "}
                </b>
              </i>
              la cual, ha colocado a esos sitemas de los que dependemos, en una situación 
              de peligro para el futuro y, con ello, nuestra                 <b className="purple">
                  {" "}
                  supervivencia{" "}
                </b>.
              <br />
              <br />
              Son muchos cambios por hacer que, de modificarse en suma, pueden tener un gran impacto en la sociedad.
              <br /> 
              Los gobiernos deben implantar y poner en marcha
              <b className="purple"> políticas y normativas </b> que recojan medidas como el establecimiento de objetivos.{" "}
              Es importante adoptar una 
              <i>
                <b className="purple">vida más sostenible:</b> consumir menos, elegir productos con menor impacto ambiental {" "}
                y una economía circular para diseñar productos <b className="purple">duraderos, reparables y reciclables</b>.
              </i>
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
