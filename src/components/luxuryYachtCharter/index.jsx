import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "@/components/titleSection";
import Link from "next/link";

export default function LuxuryYachtCharter() {
  return (
    <div className="mega-special">
      <Container>
        <Row>
          <Col lg={12}>
            <TitleSection
              sectionClasses="text-center"
              headingClasses="section-subtitle-2"
              titleSectionData={{
                subTitle: "Luxury ",
                title: "LUXURY YACHT CHARTER",
              }}
            />
          </Col>
        </Row>
        <Row>
          <div className="col-md-6">
            <Link className="item" href="/privacy">
              <div className="img">
                <img src="img/mega-yacht/privacy/k-avatar.jpg" alt="" />
              </div>
              <div className="title">PRIVACY</div>
              <div className="text">
                Privacy is at your service with first-class service, modern
                design and personalized catering and beverage options. You can
                stay in a large area for up to 36 people for cocktail cruises,
                corporate events and private rentals, or you can opt for a more
                intimate night or week-long getaway with us for up to 8 people.
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link className="item" href="/quantum">
              <div className="img">
                <img src="img/mega-yacht/quantum/k-avatar.jpg" alt="" />
              </div>
              <div className="title">QUANTUM</div>
              <div className="text">
                Offering world-class design and over three luxury levels of
                style, Quantum is our company's top-of-the-line charter ship.
                The Quantum, a favorite among the customers of our company, is
                one of the best-looking sports yachts ever. Choose us to
                experience the sunshine and beautiful atmosphere in the
                Bosphorus and enjoy an ideal setting for conferences or formal
                dining events with us.
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}
