import { Container, Row, Col } from "react-bootstrap";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Wedding & Events | İstanbul Yacht Charter",
    description: "Wedding & Events",
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
                    src={`/img/services/boat-wedding-slide.webp`}
                    alt="Image"
                  />
                </div>
                <p style={{ wordBreak: "break-all" }}>
                  As a company, we are here for a more privileged address than
                  to board one of our elegantly furnished boats for the pre- or
                  post-wedding celebrations. If you are thinking of hosting a
                  wedding, our selection of boats / yachts and menus, presented
                  by a professional and attentive staff, will surprise you with
                  endless memories of your guests.
                </p>
                <p style={{ wordBreak: "break-all" }}>
                  Let our experienced local planners help you organize your
                  wedding ceremony, reception or after-party on a luxury boat,
                  just for you and your guests for a friendly, fun and
                  unforgettable day. With our many years of experience, you will
                  see why we organize wedding planning and destination weddings
                  for many happy couples and their guests from all over the
                  world.
                </p>
                <p style={{ wordBreak: "break-all" }}>
                  Plan your destination wedding easily from abroad through our
                  company. It is easy to come from abroad and plan a destination
                  wedding in Istanbul with us. Just contact us with your
                  questions and we will be ready to help you or your wedding
                  planner through the process to arrange your dream wedding. In
                  addition, we can organize special looks, pre-wedding and
                  post-wedding celebrations, events, tours, cruises, food ideas
                  and other events.
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
