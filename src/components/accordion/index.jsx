"use client";

import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import { FaPhoneAlt, FaSearch, FaRegEnvelopeOpen } from "react-icons/fa";

export default function Acordion() {
  return (
    <div className="ltn__faq-area mb-100">
      <div className="container">
        <Row>
          <Col xs={12} lg={12}>
            <div className="ltn__faq-inner ltn__faq-inner-2">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>How to buy a product?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Scelerisque eleifend donec pretium vulputate
                      sapien nec sagittis. Proin libero nunc consequat interdum.
                      Condimentum lacinia quis vel eros donec ac. Mauris sit
                      amet massa vitae tortor. Quisque id diam vel quam
                      elementum pulvinar. Gravida in fermentum et sollicitudin
                      ac orci phasellus. Facilisis gravida neque convallis a
                      cras semper. Non arcu risus quis varius quam quisque id.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    I am a new user. How should I start?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Scelerisque eleifend donec pretium vulputate
                      sapien nec sagittis. Proin libero nunc consequat interdum.
                      Condimentum lacinia quis vel eros donec ac. Mauris sit
                      amet massa vitae tortor. Quisque id diam vel quam
                      elementum pulvinar. Gravida in fermentum et sollicitudin
                      ac orci phasellus. Facilisis gravida neque convallis a
                      cras semper. Non arcu risus quis varius quam quisque id.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Returns and refunds</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Scelerisque eleifend donec pretium vulputate
                      sapien nec sagittis. Proin libero nunc consequat interdum.
                      Condimentum lacinia quis vel eros donec ac. Mauris sit
                      amet massa vitae tortor. Quisque id diam vel quam
                      elementum pulvinar. Gravida in fermentum et sollicitudin
                      ac orci phasellus. Facilisis gravida neque convallis a
                      cras semper. Non arcu risus quis varius quam quisque id.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Are my details secured?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Scelerisque eleifend donec pretium vulputate
                      sapien nec sagittis. Proin libero nunc consequat interdum.
                      Condimentum lacinia quis vel eros donec ac. Mauris sit
                      amet massa vitae tortor. Quisque id diam vel quam
                      elementum pulvinar. Gravida in fermentum et sollicitudin
                      ac orci phasellus. Facilisis gravida neque convallis a
                      cras semper. Non arcu risus quis varius quam quisque id.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>Sale code is not working</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Scelerisque eleifend donec pretium vulputate
                      sapien nec sagittis. Proin libero nunc consequat interdum.
                      Condimentum lacinia quis vel eros donec ac. Mauris sit
                      amet massa vitae tortor. Quisque id diam vel quam
                      elementum pulvinar. Gravida in fermentum et sollicitudin
                      ac orci phasellus. Facilisis gravida neque convallis a
                      cras semper. Non arcu risus quis varius quam quisque id.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    How do I make payment by my credit card
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Scelerisque eleifend donec pretium vulputate
                      sapien nec sagittis. Proin libero nunc consequat interdum.
                      Condimentum lacinia quis vel eros donec ac. Mauris sit
                      amet massa vitae tortor. Quisque id diam vel quam
                      elementum pulvinar. Gravida in fermentum et sollicitudin
                      ac orci phasellus. Facilisis gravida neque convallis a
                      cras semper. Non arcu risus quis varius quam quisque id.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="need-support text-center mt-100">
                <h2>Still need help? Reach out to support 24/7:</h2>
                <div className="btn-wrapper mb-30">
                  <Link href="/contact" className="theme-btn-1 btn">
                    Contact Us
                  </Link>
                </div>
                <h3>
                  <FaPhoneAlt />
                  +90 535 490 67 76
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
