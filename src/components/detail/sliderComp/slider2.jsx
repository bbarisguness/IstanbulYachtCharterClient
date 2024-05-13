"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";

export default function Slider2({ products }) {
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
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider
      {...productDetailsCarouselSettings}
      className="slick-arrow-1 slick-arrow-1-inner"
    >
      {products.map((single, key) => {
        return (
          <div className="ltn__img-slide-item-4" key={key}>
            <Link href="#">
              <img
                src={`/img/product-3/${single.productImg}`}
                alt={`${single.title}`}
              />
            </Link>
          </div>
        );
      })}
    </Slider>
  );
}
