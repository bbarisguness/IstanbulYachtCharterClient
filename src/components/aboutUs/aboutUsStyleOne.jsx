"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace, data }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img
                  src="/img/others/bosphorus-yacht.webp"
                  alt="About Us Image"
                />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  {/* <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="pt-40">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6> */}
                  <h1 className="section-title">
                    {data.title}
                    <span>.</span>
                  </h1>
                  {/* <p>
                    Over 39,000 people work for us in more than 70 countries all
                    over the This breadth of global coverage, combined with
                    specialist services
                  </p> */}
                </div>
                {/* <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Smart Home Design
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Beautiful Scene Around
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Exceptional Lifestyle
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Complete 24/7 Security
                  </li>
                </ul> */}
                <div
                  className="ltn__callout bg-overlay-theme-05  mt-30"
                  style={{ overflow: "hidden" }}
                >
                  {data.content.map((item, key) => (
                    <p style={{ overflowWrap: "break-word" }}>
                      {item}
                    </p>
                  ))}
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="/reservation"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    {data.buttonName}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
