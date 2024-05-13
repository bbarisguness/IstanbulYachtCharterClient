"use client";

import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TestimonialCarouselItem from "../testimonialCarousel";

export default function TestimonialSlider({ testimonialData }) {
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
  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <Slider
      {...testiMonialsettings}
      className="ltn__testimonial-slider-5-active slick-arrow-1"
    >
      {testimonialData.map((data, key) => {
        return <TestimonialCarouselItem key={key} data={data} />;
      })}
    </Slider>
  );
}
