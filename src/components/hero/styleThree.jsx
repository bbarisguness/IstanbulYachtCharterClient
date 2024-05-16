'use client'

import Link from "next/link";
import Slider from "react-slick";
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Container, Col, Row } from "react-bootstrap";

function HeroSectionStyleThree({ data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const Herosettings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    dots: false,
    fade: true,
    cssEase: "linear",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
             <Slider
          {...Herosettings}
          className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1"
        >
          {data.map((item, key) => {
            return (
              <div key={key}>
                <div
                className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 bg-image"
                  style={{
                    backgroundImage: `url("../img/slider/${item.bgImage}")`,
                    height: 'auto',
                    minHeight: 0,
                  }}
                >
                  <div
                    className={`ltn__slide-item-inner ${
                      item.variationRight
                        ? "text-right text-end"
                        : item.variationCenter
                        ? "text-center"
                        : "text-left"
                    }`}
                  >
                    <Container>
                      <Row>
                        <Col xs={12} className="align-self-center">
                          <div className="slide-item-info">
                            <div className="slide-item-info-inner ltn__slide-animation">
                              {/* <h6 className="slide-sub-title animate__animated">
                                <span>
                                  <FaHome />
                                </span>
                                {item.subtitle}
                              </h6> */}
                              <h1 className="slide-title animate__animated">
                                {item.Title}
                              </h1>
                              <div className="slide-brief animate__animated">
                                <p>{item.Desc}</p>
                              </div>
                              {/* <div className="btn-wrapper animate__animated">
                                <Link
                                  href="/about"
                                  className="theme-btn-1 btn btn-effect-1"
                                >
                                  {item.buttonText}
                                </Link>
                              </div> */}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
    </>
  );
}

export default HeroSectionStyleThree;
