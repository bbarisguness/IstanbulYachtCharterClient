import { Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Cancellation | İstanbul Yacht Charter",
    description: "Cancellation",
  };
}

export default function Page() {
  return (
    <>
      <ShopBreadCrumb
        title="Cancellation"
        sectionPace=""
        currentSlug="Cancellation"
      />
      <div className="container terms-conditions">
        <Row>
          <Col
            xs={12}
            lg={12}
            style={{
              border: "1px solid black",
              padding: "15px",
              borderRadius: 5,
            }}
          >
            <h6 style={{ borderBottom: "1px solid black", paddingBottom: 10 }}>
              Cancellation
            </h6>
            <p>
            Istanbul limo is the icon of quality transport services. Our facilities are designed to suit the requirements of the modern individuals. We have a huge collection of luxury vehicles for the service seekers to choose and obtain. Our professionals are capable of understanding your needs and we design the perfect travel route for you with your preferences and input. In the transport providing services we maintain transparency of work execution with our clients. Our service packages go through meticulous scrutiny in order to reach perfection. From reservation to cancelation, each segment of our services is designed to simplify the vehicle ion process of the individuals.
            </p>
            <p>
              <strong>Cancellations Process</strong>
            </p>
            <p>
            We care for our clients and our main purpose is to satisfy their needs. Therefore, each and every segment of our facilities is well designed for the benefit of the clients. In here we will explain a few protocols or resolutions that we maintain in order to simplify the cancelation process for the clients.
            </p>
            <p>
            - All cancellation confirmations must be received by our professionals before at least 2 hours of supposed and discussed arrival of our limousine to your preferred destination. If the client fails to inform us about their preference towards cancellation of the services before 2 hours of the arrival, our company would forfeiture of 100 percent of the estimated trip total.
            </p>
            <p>
            - Our company would ask for 50% payment of the total estimated trip expense during the booking process for the service time frame of 3 hours or more. This money would be non-refundable if the client fails to inform our personnel about the cancellation in between 48hours after the booking of your ed limousine vehicle.
            </p>
            <p>
            - Cancelling our services within 24 hours of booking would not require any charges or cancelation fee. While providing the credit or debit card statistics to our website for booking our services, the client would have to agree to provide Istanbul limousine with a cancellation fee if they cancel the services after 24 hours of making the reservation.
            </p>
            <p>
            - The cancelation process also lets clients to know that in any case, their credit or debit card statistics decline from paying for the cancelation fee, the company would invoice the respective clients for all charges incurred.
            </p>
            <p>
            - In any case, the cancellation payment is not paid by the client in between 90 days; the company can hire an outside collection agency.
            </p>
            <p>
              <strong>Rules of Conduct</strong>
            </p>
            <p>
            In order to maintain safety, comfort, and luxury for the transport service seekers, our company follows a set of rules and urges the clients to maintain a few of them as well. <b>Istanbul limousine</b> service focuses on offering satisfactory services to the clients and service seekers. Our facilities and transport options are designed to match the requirements of clients through adding personalization process. Our rules of conduct are only developed to allow our clients to enjoy their travel experience with us.
            </p>
            <p style={{margin: "0 0 0 10px"}}>
            - We urge our clients to keep our vehicle free of smoke
            </p>
            <p style={{margin: "0 0 0 10px"}}>
            - Any damage to the vehicle by the passenger would require the clients to pay for compensation
            </p>
            <p style={{margin: "0 0 0 10px"}}>
            - Alcohol consumption is restricted for minors in the vehicle
            </p>
            <p>
            <b>Turkey limousine</b> services can add an extra charm to your transportation or travel requirements.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
