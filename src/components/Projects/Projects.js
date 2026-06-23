import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import esponja from "../../Assets/Products/esponja.jpg";
import jabonLiquido from "../../Assets/Products/jabonLiquido.jpg";
import huevos from "../../Assets/Products/huevos.jpg";
import almendras from "../../Assets/Products/almendras.jpg";
import bolsa from "../../Assets/Products/bolsa.png";
import jabonBarra from "../../Assets/Products/jabonBarra.jpg";
import botellacero from "../../Assets/Products/botellaacerp.jpg";
import pistachos from "../../Assets/Products/pistachos.jpg";
import miel from "../../Assets/Products/miel.jpg";
import mermelada from "../../Assets/Products/mermeladafresa.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Favoritos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Apartado de mis productos favoritos.
        </p>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col className="project-card">
            <ProjectCard
              imgPath={almendras}
              isBlog={false}
              title="1kg de almendras"
              description="Contenedor con un kilo de almendras."
              ghLink="https://www.mercadolibre.com.mx/almendra-natural-1kg-calidad-premium/p/MLM36728588#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=4bc5745f-b1b5-4452-9fd8-87f7467d6107&wid=MLM2062988215&sid=recos"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={jabonBarra}
              isBlog={false}
              title="Jabón natural"
              description="Jabón natural hecho a mano para cuerpo, rosa, azul, amarillo, realizado con proceso frio."
              ghLink="https://www.mercadolibre.com.mx/dr-natural-jabon-corporal-de-castilla-en-barra-natural-141g/up/MLMU3804623629?pdp_filters=item_id%3AMLM5324805822%7Cshipping%3Afulfillment%7Cdeal%3AMLM1020488-1"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={huevos}
              isBlog={false}
              title="Huevos"
              description="Un cartón de huevos blancos de gallina."
              ghLink="https://www.chedraui.com.mx/huevo-blanco-30-piezas-3378511/p?ta=1782071523&gad_source=1&gad_campaignid=23749377327&gclid=CjwKCAjwl97RBhBWEiwAa9rbXZXj4w2aKtetBIye7nOcRXq0sC8u2nXuynf8Cy-JDwTUVXJR7xRrDBoCjdcQAvD_BwE"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={esponja}
              isBlog={false}
              title="Esponja de trastes"
              description="Esponja azul y verde para lavar trastes."
              ghLink="https://www.mercadolibre.com.mx/2-fibras-con-esponja-trastes-ollas-sarten-cocina-ttaio/p/MLM45596563?pdp_filters=item_id:MLM2572358873|shipping:fulfillment|deal:MLM1020488-1#is_advertising=true&searchVariation=MLM45596563&backend_model=search-backend&be_origin=backend&position=1&search_layout=grid&type=pad&tracking_id=f0e5b9de-57d4-41b5-b100-9efef8d09f44&ad_domain=VQCATCORE_SUPERMARKET&ad_position=1&ad_click_id=NjU4MWU5MTEtZjQ2ZC00NjhiLWJiODQtMTE1ZGZhZGZiZDA0"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={bolsa}
              isBlog={false}
              title="Bolsa ecológica"
              description="Bolsa ecológica azul de tela."
              ghLink="https://es.uline.mx/Product/Detail/S-25723/Reusable-Shopping-Bags/Deluxe-Jute-Shoppers-12-x-7-3-4-x-12?pricode=WD5640&gadtype=pla&id=S-25723&ad_group_id=153865562345&gad_source=1&gad_campaignid=1349684074&gclid=CjwKCAjwl97RBhBWEiwAa9rbXUxYvLsCKE5i4w_Eg8k1HN5wIqCNEpLauca4iRurUTIeRI3wRHApThoCqHgQAvD_BwE"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={jabonLiquido}
              isBlog={false}
              title="Jabón líquido"
              description="Jabón líquido a base de ingredientes naturales. "
              ghLink="https://www.mercadolibre.com.mx/jabon-liquido-para-manos-blumen-cherry-blossom-4l/p/MLM37034844?pdp_filters=shipping%3Afulfillment%7Cdeal%3AMLM1020488-1#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=5&type=product&tracking_id=c546cdf9-e213-4bfe-bbde-c8f2d837f76f&wid=MLM3656276782&sid=search"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={botellacero}
              isBlog={false}
              title="Botella de acero inoxidable 500ml"
              description="Botella reutilizable con capacidad de 500ml para transportar tus bebidas a todos lados. "
              ghLink="https://capsamex.com.mx/productos/MO6856/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={pistachos}
              isBlog={false}
              title="1kg de pistaches"
              description="Tarro con 1kg de pistaches frescos. "
              ghLink="https://donzabor.mx/products/pistache?srsltid=AfmBOoo4XRKSoGqBqA89sGNWIqwycVc5lG6yc7o9lzTbeQ0gjc2f0Nl6"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={mermelada}
              isBlog={false}
              title="Mermelada de fresa casera 500gr"
              description="Mermelada de fresa casera, a base de frutas naturales sin azúcar. "
              ghLink="https://theoriginalmarket.mx/producto/mermelada-fresa-citrica-sin-azucar/?attribute_pa_370g-250g=grande-370g&srsltid=AfmBOorBP22ZiRVTG-M-AMqwFUClOTKXFCkt3HRWpS0hjT-18siDOaR-0Hw"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col className="project-card">
            <ProjectCard
              imgPath={miel}
              isBlog={false}
              title="Miel natural 1kg"
              description="Miel producida responsablemente. "
              ghLink="https://titin.mx/product/miel-100-members-mark-1-kg/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
