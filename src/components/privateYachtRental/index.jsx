import { Col, Container, Row } from "react-bootstrap";
import TitleSection from "../titleSection";

export default function PrivateYachtRental() {
  return (
    <div className="modul-type">
      <Container>
        <Row>
          <Col lg={12}>
            <TitleSection
              sectionClasses="text-center"
              headingClasses="section-subtitle-2"
              titleSectionData={{
                subTitle: "Private ",
                title: "PRIVATE YACHT RENTAL",
              }}
            />
          </Col>
        </Row>
        <Row className="item">
          <div className="col-md-6">
            <p>
              With the widest range of boat rentals and yacht charters in
              Istanbul, a big party for small and large groups can be a great
              idea. Feel free to contact us.
            </p>
            <p>
              For a free quote, itinerary, menus, photos and more information,
              please email us the number, date and services you need today. You
              will receive a prompt and comprehensive quotation within 1
              Business day.
            </p>
            <p>
              <b>
                We provide professional and reliable customer-oriented service.
              </b>
            </p>
            <p>
              Admire the magnificent beauties of the Bosphorus with its
              360-degree view from the wide upper bridge, or enjoy relaxing
              comfortably on the sun terrace or in the comfortable indoor and
              outdoor lounges.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img">
              <img
                src="img/private-yacht-rental.webp"
                alt="luxury yacht charter in the istanbul bosphorus"
              />
            </div>
          </div>
        </Row>
        <Row className="item">
          <div className="col-md-6">
            <div className="img">
              <img
                src="img/private-yacht-rental-2.webp"
                alt="luxury yacht charter in the istanbul bosphorus"
              />
            </div>
          </div>
          <div className="col-md-6">
            <p>
              Find out about Istanbul with the best private boat rental for you
              with our helpful guide and rent the perfect boat for you. You can
              make personalized boat trips along the magnificent Bosphorus
              coast, sit back on the luxury yacht and relax with a glass of
              wine, Turkish snacks and drinks, take plenty of photos on
              Instagram, or even learn to sail with a captain.
            </p>
            <p>
              After exploring the most important sights of the historical
              peninsula, such as palaces, museums and the most important sights
              of the city, you can rent a private yacht and cruise up and down
              the Bosphorus, passing iconic palaces and historical sites.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
