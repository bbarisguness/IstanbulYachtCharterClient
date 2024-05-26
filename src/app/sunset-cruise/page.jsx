import { Container, Row, Col } from "react-bootstrap";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Sunset Cruise | İstanbul Yacht Charter",
    description: "Sunset Cruise",
  };
}

export default async function Page() {
  const aboutData = {
    title: "SUNSET CRUISE ON PRIVATE YACHT",
    content: [
      "Discover all the options we offer you to participate in tours to different destinations on our bosphorus sunset cruise tour. We are always trying to fulfill your wishes in the best way with a wide repertoire of unique experiences. Because as a true expert, our company is with you. We are pleased to offer you our perfectly organized services.",
      "You will feel great on your trips to the Bosphorus. By participating in our Bosphorus Tours, you will have endless experiences. Explore all the sights along the Bosphorus, admire the magical beauty of Istanbul. We are waiting for you in Istanbul…",
    ],
    buttonName: "SUNSET CRUISE RESERVATION",
  };
  return (
    <>
      <div className="ltn__page-details-area ltn__service-details-area mb-105">
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <div className="ltn__page-details-inner ltn__service-details-inner">
                <div className="ltn__blog-img">
                  <img src={`/img/services/sunset-cruise-bg.jpg`} alt="Image" />
                </div>
                <p style={{ wordBreak: "break-all" }}>{aboutData.content}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <AboutUsStyleOne sectionSpace="pt-80 pb-40" data={aboutData} /> */}
    </>
  );
}
