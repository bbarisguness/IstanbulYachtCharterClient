'use client'

import Slider from "react-slick";
import Link from "next/link";
import { productSlug } from "@/lib/products";

export default function PopulerProperties({ popularProducts }) {
  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };
  return (
    <Slider
      {...popular_product}
      className="row ltn__popular-product-widget-active slick-arrow-1"
    >
      {/* <!-- ltn__product-item --> */}

      {popularProducts.map((product, key) => {
        const slug = productSlug(product.title);
        return (
          <div
            key={key}
            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---"
          >
            <div className="product-img">
              <Link href={`/${slug}`}>
                <img src={`/img/product-3/${product.productImg}`} alt={slug} />
              </Link>
              <div className="real-estate-agent">
                <div className="agent-img">
                  <Link href="#">
                    <img src={`/img/blog/author.jpg`} alt="#" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="product-price">
                <span>
                  ${product.price}
                  <label>/Month</label>
                </span>
              </div>
              <h2 className="product-title">
                <Link href={`/${slug}`}>{product.title}</Link>
              </h2>
              <div className="product-img-location">
                <ul>
                  <li>
                    <Link href="product-details">
                      <i className="flaticon-pin"></i>
                      {product.locantion}
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                <li>
                  <span>{product.propertyDetails.bedrooms}</span>
                  <span className="ms-1">Bedrooms</span>
                </li>
                <li>
                  <span>{product.propertyDetails.baths}</span>
                  <span className="ms-1">Bathrooms</span>
                </li>
                <li>
                  <span>{product.propertyDetails.area}</span>
                  <span className="ms-1">square Ft</span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
