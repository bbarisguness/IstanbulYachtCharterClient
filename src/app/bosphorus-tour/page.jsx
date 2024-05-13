import { Container, Row, Col } from "react-bootstrap";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Bosphorus Tour | İstanbul Yacht Charter",
    description: "Bosphorus Tour",
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
                  <img
                    src={`/img/services/bosphorus-tour-slide.jpg`}
                    alt="Image"
                  />
                </div>
                <p style={{ wordBreak: "break-all" }}>
                  Take an elegant and luxurious yacht to enjoy a tour of
                  Istanbul and experience the Bosphorus with a beautiful cruise
                  during the day. Explore Ortaköy, Bebek, Rumeli Fortress,
                  Maiden Tower and Bosphorus Bridges along the coast.
                </p>
                <p style={{ wordBreak: "break-all" }}>
                  Couples, families, business groups, groups of friends, and,
                  moreover, gala dinners, weddings, birthdays and all kinds of
                  party memorable tours with boats and luxury yachts for special
                  occasions such as Bosphorus cruises, we specialize in offering
                  spectacular! By participating in our Bosphorus tours, you will
                  have experiences that will be engraved in your heart forever.
                  Explore the magnificent Bosphorus and all the sights along its
                  length and admire all the important moments! Istanbul is
                  waiting for you…
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <AboutUsStyleOne sectionSpace="pt-80 pb-40" data={aboutData} /> */}
    </>
  );
}
