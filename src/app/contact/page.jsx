import React from "react";
import Contact from "@/components/contact";
import { Container, Row, Col } from "react-bootstrap";
import CallToAction from "@/components/callToAction";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Contact | İstanbul Yacht Charter",
    description: "Contact",
  };
}

export default async function Page() {
  return (
    <>
      <div
        className="page-slide"
        style={{
          background:
            "url(../../../img/slider/slide-4.webp) center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container style={{ height: "100%", position: "relative" }}>
          <div className="text-type-2">
            <h1>Contact</h1>
            <p>
              Please do not hesitate to contact us for your questions regarding
              boat, yacht charter &amp; Bosphorus Tours. One of our yacht
              specialist will be happy to guide you through booking.
            </p>
          </div>
        </Container>
      </div>
      <Contact classNames={"mt-90"} />
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
