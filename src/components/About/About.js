import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
//import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
//import laptopImg from "../../Assets/productos.png";
import Toolstack from "./Toolstack";

import art1 from "../../Assets/Products/art1.jpg";
import art2 from "../../Assets/Products/art2.jpg";
import art3 from "../../Assets/Products/art3.jpg";
import art4 from "../../Assets/Products/art4.jpg";
import art5 from "../../Assets/Products/art5.jpg";
import art6 from "../../Assets/Products/art6.jpg";
import art7 from "../../Assets/Products/art7.jpg";
import art8 from "../../Assets/Products/art8.jpg";
import art9 from "../../Assets/Products/art9.jpg";
import art10 from "../../Assets/Products/art10.jpg";

import fr1 from "../../Assets/Products/fr1.jpg";
import fr2 from "../../Assets/Products/fr2.jpg";
import fr3 from "../../Assets/Products/fr3.jpg";
import fr4 from "../../Assets/Products/fr4.jpg";
import fr5 from "../../Assets/Products/fr5.jpg";
import fr6 from "../../Assets/Products/fr6.jpg";
import fr7 from "../../Assets/Products/fr7.jpg";
import fr8 from "../../Assets/Products/fr8.jpg";
import fr9 from "../../Assets/Products/fr9.jpg";
import fr10 from "../../Assets/Products/fr10.jpg";

import pl1 from "../../Assets/Products/pl1.jpg";
import pl2 from "../../Assets/Products/pl2.jpg";
import pl3 from "../../Assets/Products/pl3.jpg";
import pl4 from "../../Assets/Products/pl4.jpg";
import pl5 from "../../Assets/Products/pl5.jpg";
import pl6 from "../../Assets/Products/pl6.jpg";
import pl7 from "../../Assets/Products/pl7.jpg";
import pl8 from "../../Assets/Products/pl8.jpg";
import pl9 from "../../Assets/Products/pl9.jpg";
import pl10 from "../../Assets/Products/pl10.jpg";

import ro1 from "../../Assets/Products/rop1.jpg";
import ro2 from "../../Assets/Products/rop2.jpg";
import ro3 from "../../Assets/Products/rop3.jpg";
import ro4 from "../../Assets/Products/rop4.jpg";
import ro5 from "../../Assets/Products/rop5.jpg";
import ro6 from "../../Assets/Products/rop6.jpg";
import ro7 from "../../Assets/Products/rop7.jpg";
import ro8 from "../../Assets/Products/rop8.jpg";
import ro9 from "../../Assets/Products/rop9.jpg";
import ro10 from "../../Assets/Products/rop10.jpg";

import ut1 from "../../Assets/Products/ut1.jpg";
import ut2 from "../../Assets/Products/ut2.jpg";
import ut3 from "../../Assets/Products/ut3.jpg";
import ut4 from "../../Assets/Products/ut4.jpg";
import ut5 from "../../Assets/Products/ut5.jpg";
import ut6 from "../../Assets/Products/ut6.png";
import ut7 from "../../Assets/Products/ut7.jpg";
import ut8 from "../../Assets/Products/ut8.jpg";
import ut9 from "../../Assets/Products/ut9.jpg";
import ut10 from "../../Assets/Products/ut10.jpg";

import ProjectCard from "./ProjectCards";

function About() {
  
  const [categoriaSeleccionada, setCategoriaSelec] = useState("");
  const seccionProductosRef = useRef(null);
  const manejarSeleccionCategoria = (categoria) => {
    setCategoriaSelec(categoria);
    setTimeout(() => {
      if (seccionProductosRef.current) {
        seccionProductosRef.current.scrollIntoView({
          behavior: "smooth", // Hace que el deslizamiento sea suave y no un salto brusco
          block: "start",     // Alinea el elemento al tope de la pantalla
        });
      }
    }, 50);
  };
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={12}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Catálogo <strong className="purple">Gongo</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
            </Col>
          </Row>
          <h1 className="project-heading">
            Nuestras <strong className="purple">categorías </strong>
          </h1>

          <Techstack onSelectCategory={manejarSeleccionCategoria}/>
          
          {categoriaSeleccionada && (
            <div ref={seccionProductosRef} style={{ marginTop: "30px", marginBottom: "50px", scrollMarginTop: "100px" }}>
              <h2 style={{ color: "white", textTransform: "capitalize", textAlign: "center" }}>
                Categoría: <strong className="purple">{categoriaSeleccionada}</strong>
              </h2>
              <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 justify-content-center" style={{ paddingTop: "20px" }}>
                
                {/* CONDICIONAL: Si la categoría es Alimentos, muestra estos productos */}
                {categoriaSeleccionada === "alimentos" && (
                  <>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr1}
                        isBlog={false}
                        title="Kg de maíz amarillo"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr2}
                        isBlog={false}
                        title="KG de arándanos"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr3}
                        isBlog={false}
                        title="Kg de mandarinas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr4}
                        isBlog={false}
                        title="Kg de manzanas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr5}
                        isBlog={false}
                        title="Kg de duraznos"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr6}
                        isBlog={false}
                        title="Kg de pitayas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr7}
                        isBlog={false}
                        title="Leche de vaca entera 1L"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr8}
                        isBlog={false}
                        title="Aceite de girasol 1L"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr9}
                        isBlog={false}
                        title="Kg de verduras surtidas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={fr10}
                        isBlog={false}
                        title="Kg de ajos"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Button className = "ver-mas" variant="primary"  target="_blank">
                      {"Más sobre "}
                      <span className = "ver-mas-span">Alimentos →</span>
                    </Button>

                  </>
                )}

                {/* CONDICIONAL: Si la categoría es Artesanías */}
                {categoriaSeleccionada === "artesanias" && (
                  <>
                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art1}
                        isBlog={false}
                        title="Farola de acero inoxidable"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art2}
                        isBlog={false}
                        title="Tapetes artesanales hechos a mano"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art3}
                        isBlog={false}
                        title="Baules pintados a manos"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art4}
                        isBlog={false}
                        title="Decoración pingüino tallado en madera"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art5}
                        isBlog={false}
                        title="Misterio tallado en madera y pintado a mano con colores 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art6}
                        isBlog={false}
                        title="Alcancia de cerdito en cerámica pintada a mano con colores 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art7}
                        isBlog={false}
                        title="Decoración navidad ángelito en cerámica pintado a mano con colores 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art8}
                        isBlog={false}
                        title="Esferas de vidrio 100% artesanales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art9}
                        isBlog={false}
                        title="Colgantes Santa Claus tallados en madera y pintados con colores 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={art10}
                        isBlog={false}
                        title="Papel decorativo día de muerto hecho de papel china biodegradable"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Button className = "ver-mas" variant="primary"  target="_blank">
                      {"Más sobre "}
                      <span className = "ver-mas-span">Artesanías y decoración →</span>
                    </Button>
                  </>
                )}

                
                {categoriaSeleccionada === "utensilios" && (
                  <>
                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut1}
                        isBlog={false}
                        title="Tazas de flores pintadas a mano con pinturas 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut2}
                        isBlog={false}
                        title="Bolsa ecológica de tela con la frase 'piensa verde'"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut3}
                        isBlog={false}
                        title="Juego de 5 tazas pintadas a mano con pinturas 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut4}
                        isBlog={false}
                        title="Cubiertos de acero inoxidable con mango de madera certificada"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut5}
                        isBlog={false}
                        title="Cesto de palma circular L"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut6}
                        isBlog={false}
                        title="Paquete 3 minibolsas ecológicas de tela"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut7}
                        isBlog={false}
                        title="Juego de té de cerámica pintado a mano con pinturas 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut8}
                        isBlog={false}
                        title="Taza artesanal pintada a mano con pinturas 100% vegetales"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut9}
                        isBlog={false}
                        title="Termo de acero inoxidable magenta 750ml"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ut10}
                        isBlog={false}
                        title="Termo de acero inoxidable patrón de flores 2L"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Button className = "ver-mas" variant="primary"  target="_blank">
                      {"Más sobre "}
                      <span className = "ver-mas-span">Utensilios →</span>
                    </Button>
                  </>
                )}

                {categoriaSeleccionada === "moda" && (
                  <>
                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro1}
                        isBlog={false}
                        title="Suéter tejido a mano rayas azules y blancas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro2}
                        isBlog={false}
                        title="Pantalón hecho a partir de poliéster reciclado"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro3}
                        isBlog={false}
                        title="Zapatos formales caballero de cuero vegetal"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro4}
                        isBlog={false}
                        title="Zapatos niño con suela de goma natural y cuero vegetal"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro5}
                        isBlog={false}
                        title="Bolsa de lino con estampado de flores"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro6}
                        isBlog={false}
                        title="Sombrero dama cáñamo "
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro7}
                        isBlog={false}
                        title="Gorro de tela con franjas azules y blancas algodón orgánico"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro8}
                        isBlog={false}
                        title="Vestido estampado flores mangas cortas con tela creada a partir de residuos agrícolas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro9}
                        isBlog={false}
                        title="Chaleco hombre nailón regenerado"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={ro10}
                        isBlog={false}
                        title="Mantas de algodón orgánico"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Button className = "ver-mas" variant="primary"  target="_blank">
                      {"Más sobre "}
                      <span className = "ver-mas-span">Moda →</span>
                    </Button>
                  </>
                )}

                {categoriaSeleccionada === "plantas" && (
                  <>
                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl1}
                        isBlog={false}
                        title="Lavanda"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl2}
                        isBlog={false}
                        title="Bugambilia naranja"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl3}
                        isBlog={false}
                        title="Tulipán rojo con amarillo"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl4}
                        isBlog={false}
                        title="Rosa roja"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl5}
                        isBlog={false}
                        title="Paquete 2 suculentas"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl6}
                        isBlog={false}
                        title="Paquete 3 piezas herramientas jardinería, madera certificada y acero inoxidable"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl7}
                        isBlog={false}
                        title="Carretilla grande"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl8}
                        isBlog={false}
                        title="Semillas de soya"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl9}
                        isBlog={false}
                        title="Semillas de lino"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Col className="project-card">
                      <ProjectCard
                        imgPath={pl10}
                        isBlog={false}
                        title="Granos de maíz amarillo"
                        description="000.00$"
                        ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
                        //demoLink="https://chatify-49.web.app/"
                      />
                    </Col>

                    <Button className = "ver-mas" variant="primary"  target="_blank">
                      {"Más sobre "}
                      <span className = "ver-mas-span">Plantas y jardinería →</span>
                    </Button>

                  </>
                )}


                

                

              </Row>
            </div>
          )}

          <h1 className="project-heading">
            <strong className="purple">Otras</strong> secciones
          </h1>
          <Toolstack />
          {/* <Github /> */}
        </Container>
      </Container>
    </>
  );
}

export default About;
