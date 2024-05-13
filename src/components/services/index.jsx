import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "../titleSection";
import { getProducts, productSlug } from "@/lib/products";
import servicesData from "@/data/servicesData.json";
import ServiceItem from "./serviceItem";

export default function Services({ title }) {
  const agents = getProducts(servicesData, "buying", "featured", 3);
  return (
    <div className="ltn__team-area pt-50 section-bg-1">
      <Container>
        <Row>
          <Col lg={12}>
            <TitleSection
              sectionClasses="text-center"
              headingClasses="section-subtitle-2"
              titleSectionData={{
                subTitle: "Services",
                title: title ? title : 'Private Yacht Services',
              }}
            />
          </Col>
        </Row>

        <Row>
          {agents.map((data, key) => {
            const slug = productSlug(data.name);
            return (
              <Col key={key} xs={12} sm={6} lg={4}>
                <ServiceItem
                  baseUrl="service"
                  data={data}
                  slug={slug}
                  additionalClassname=""
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
