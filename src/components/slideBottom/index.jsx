import Link from "next/link";
import { Container, Row } from "react-bootstrap";

export default function SlideBottom() {
  return (
    <div className="slide-bottom">
      <Container>
        <Row>
          <div className="title">Where to from here?</div>
          <p>
            Get in touch and speak with our cruises directors. We can tailor a
            charter package to suit your needs and requirements
          </p>
          <Link href="/reservation">Make an enquiry</Link>
        </Row>
      </Container>
    </div>
  );
}
