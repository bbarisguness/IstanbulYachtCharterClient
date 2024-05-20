import products from "@/data/products.json";
import blogs from "@/data/blogs.json";
import { productSlug, getProducts, getDiscountPrice } from "@/lib/products";
import FollowUs from "@/components/followUs";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import Services from "@/components/services";
import Tags from "@/components/tags";
import Link from "next/link";
import VideoComp from "@/components/detail/videoComp";
import {
  FaStar,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Slider1 from "@/components/detail/sliderComp/slider1";
import FloorPlans from "@/components/detail/floorPlans";
import PopulerProperties from "@/components/detail/sliderComp/populerProperties";
import Reservation from "@/components/reservation";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "tour detay",
    description: "tour detay",
  };
}

export default function Page({ params, searchParams }) {
  const aboutThisActivityData = [
    {
      title: "Free cancellation",
      content: "Cancel up to 24 hours in advance for a full refund",
    },
    {
      title: "Reserve now & pay later",
      content:
        "Keep your travel plans flexible — book yourspotand pay nothing today.",
    },
    {
      title: "Duration 3 hours",
      content: "Check availability to see starting times.",
    },
    {
      title: "Host or greeter",
      content:
        "English, Arabic, Bulgarian, French, Greek, Spanish, Russian, Turkish, German,Italian",
    },
  ];

  const latestdBlogs = getProducts(blogs, "buying", "featured", 4);
  const product = products.filter(
    (single) => productSlug(single.title) === params.tour
  )[0];

  const relatedProducts = getProducts(
    products,
    product.category[0],
    "popular",
    2
  );

  const topRatedProducts = getProducts(
    products,
    product.category[0],
    "topRated",
    2
  );

  const popularProducts = getProducts(
    products,
    product.category[0],
    "popular",
    4
  );

  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  return (
    <>
      {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}

      <div className="ltn__img-slider-area mb-90">
        <Container fluid className="px-0">
          <Slider1 product={product} />
        </Container>
      </div>

      {/* <!-- IMAGE SLIDER AREA END (img-slider-3) --> */}
      <div className="ltn__shop-details-area pb-10">
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <div className="ltn__blog-meta">
                  <ul>
                    {
                      (product.featured ? (
                        <li className="ltn__blog-category">
                          <Link href="#">Featured</Link>
                        </li>
                      ) : (
                        ""
                      ),
                      product.rent ? (
                        <li className="ltn__blog-category">
                          <Link className="bg-orange" href="#">
                            For Rent
                          </Link>
                        </li>
                      ) : (
                        ""
                      ))
                    }

                    {/* <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt"></i>
                      {product.date}
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-comments"></i>
                        {product.comments}
                        Comments
                      </a>
                    </li> */}
                  </ul>
                </div>
                <h1> {product.title}</h1>
                <label>
                  <span className="ltn__secondary-color">
                    <i className="flaticon-pin"></i>
                  </span>{" "}
                  {product.locantion}
                </label>
                <h4 className="title-2"> {product.description.title}</h4>
                <p>{product.description.fullDescription}</p>
                {/* <p>{product.description.shortDescription}</p> */}

                <h4 className="title-2">Main Details & About This Activity </h4>
                <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                  <ul>
                    <li>
                      <label>Lenght:</label>{" "}
                      <span>{product.propertyDetails.length}</span>
                    </li>
                    <li>
                      <label>Guest: </label>{" "}
                      <span>{product.propertyDetails.guestCount}</span>
                    </li>
                    <li>
                      <label>Cabin:</label>{" "}
                      <span>{product.propertyDetails.cabin}</span>
                    </li>
                    <li>
                      <label>Location:</label> <span>{product.locantion}</span>
                    </li>
                    <li>
                      <label>Captain:</label>{" "}
                      <span>{product.propertyDetails.captain}</span>
                    </li>
                    <li>
                      <label>Crew:</label>{" "}
                      <span>{product.propertyDetails.crew}</span>
                    </li>
                  </ul>
                  <ul>
                    {aboutThisActivityData.map((item, index) => (
                      <li>
                        <span>{item.title}</span>
                        <br />
                        <span style={{ fontSize: 13 }}>{item.content}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h4 className="title-2">Hourly Rental Fee</h4>
                <div className="property-detail-info-list clearfix mb-60">
                  <div>
                    <b>Starting From 400.00 € </b>
                  </div>
                </div>

                <Reservation navMenuClass="d-none" customClasses="" data={product} />

                {/* <h4 className="title-2">Facts and Features</h4>
                <div className="property-detail-feature-list clearfix mb-45">
                  <ul>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Living Room</h6>
                          <small>{product.factsAndFeatures.livingRoom}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Garage</h6>
                          <small>{product.factsAndFeatures.garage}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Dining Area</h6>
                          <small>{product.factsAndFeatures.diningArea}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Bedroom</h6>
                          <small>{product.factsAndFeatures.bedroom}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Bathroom</h6>
                          <small>{product.factsAndFeatures.bathroom}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Gym Area</h6>
                          <small>{product.factsAndFeatures.gymArea}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Garden</h6>
                          <small>{product.factsAndFeatures.garden}</small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed"></i>
                        <div>
                          <h6>Parking</h6>
                          <small>{product.factsAndFeatures.parking}</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}

                <h4 className="title-2" style={{marginTop: 60}}>From Our Gallery</h4>
                <div className="ltn__property-details-gallery mb-30">
                  <div className="row">
                    <div className="col-md-6">
                      <Link
                        target="_blank"
                        href={`/img/others/${product.gallery.img1}`}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={`/img/others/${product.gallery.img1}`}
                          alt={`${product.title}`}
                        />
                      </Link>
                      <Link
                        target="_blank"
                        href={`/img/others/${product.gallery.img2}`}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={`/img/others/${product.gallery.img2}`}
                          alt={`${product.title}`}
                        />
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        target="_blank"
                        href={`/img/others/${product.gallery.img3}`}
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          className="mb-30"
                          src={`/img/others/${product.gallery.img3}`}
                          alt={`${product.title}`}
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <h4 className="title-2 mb-10">Amenities</h4>
                <div className="property-details-amenities mb-60">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          {product.amenities1.map((single, key) => {
                            return (
                              <li key={key}>
                                <label className="checkbox-item">
                                  {single}
                                  <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          {product.amenities2.map((single, key) => {
                            return (
                              <li key={key}>
                                <label className="checkbox-item">
                                  {single}
                                  <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="ltn__menu-widget">
                        <ul>
                          {product.amenities3.map((single, key) => {
                            return (
                              <li key={key}>
                                <label className="checkbox-item">
                                  {single}
                                  <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <h4 className="title-2">Location</h4>
                <div className="property-details-google-map mb-60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen=""
                  ></iframe>
                </div> */}

                {/* <h4 className="title-2">Floor Plans</h4>
                <FloorPlans /> */}

                <h4 className="title-2">Property Video</h4>
                <VideoComp />

                {/* <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                  <h4 className="title-2">Customer Reviews</h4>
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <FaStar />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaStar />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaStar />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaStar />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FaRegStar />
                        </a>
                      </li>
                      <li className="review-total">
                        <a href="#"> ( 95 Reviews )</a>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="ltn__comment-area mb-30">
                    <div className="ltn__comment-inner">
                      <ul>
                        <li>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-img">
                              <img src="/img/testimonial/1.jpg" alt="Image" />
                            </div>
                            <div className="ltn__commenter-comment">
                              <h6>
                                <a href="#">Adam Smit</a>
                              </h6>
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaRegStar />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus, omnis fugit
                                corporis iste magnam ratione.
                              </p>
                              <span className="ltn__comment-reply-btn">
                                September 3, 2020
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-img">
                              <img src="/img/testimonial/3.jpg" alt="Image" />
                            </div>
                            <div className="ltn__commenter-comment">
                              <h6>
                                <a href="#">Adam Smit</a>
                              </h6>
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaRegStar />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus, omnis fugit
                                corporis iste magnam ratione.
                              </p>
                              <span className="ltn__comment-reply-btn">
                                September 2, 2020
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-img">
                              <img src="/img/testimonial/2.jpg" alt="Image" />
                            </div>
                            <div className="ltn__commenter-comment">
                              <h6>
                                <a href="#">Adam Smit</a>
                              </h6>
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaRegStar />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus, omnis fugit
                                corporis iste magnam ratione.
                              </p>
                              <span className="ltn__comment-reply-btn">
                                September 2, 2020
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ltn__comment-reply-area ltn__form-box mb-30">
                    <form action="#">
                      <h4>Add a Review</h4>
                      <div className="mb-30">
                        <div className="add-a-review">
                          <h6>Your Ratings:</h6>
                          <div className="product-ratting">
                            <ul>
                              <li>
                                <a href="#">
                                  <FaStar />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <FaStar />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <textarea placeholder="Type your comments...."></textarea>
                        <span className="inline-icon">
                          <FaPencilAlt />
                        </span>
                      </div>
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input type="text" placeholder="Type your name...." />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                      </div>
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input type="email" placeholder="Type your email...." />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                      </div>
                      <div className="input-item input-item-website ltn__custom-icon">
                        <input
                          type="text"
                          name="website"
                          placeholder="Type your website...."
                        />
                        <span className="inline-icon">
                          <FaGlobe />
                        </span>
                      </div>
                      <label className="mb-0">
                        <input type="checkbox" name="agree" /> Save my name,
                        email, and website in this browser for the next time I
                        comment.
                      </label>
                      <div className="btn-wrapper">
                        <button
                          className="btn theme-btn-1 btn-effect-1 text-uppercase"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div> */}
                <Services titleType={0} title={"Services"} />
                <h4 className="title-2">Related Properties</h4>
                <Row>
                  {relatedProducts.map((data, key) => {
                    const slug = productSlug(data.title);
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount
                    ).toFixed(2);
                    const productPrice = product.price.toFixed(2);
                    const cartItem = [];
                    const wishlistItem = [];
                    const compareItem = [];
                    return (
                      <Col xs={12} sm={6} lg={4} key={key}>
                        <RelatedProduct
                          productData={data}
                          slug={slug}
                          baseUrl="."
                          discountedPrice={discountedPrice}
                          productPrice={productPrice}
                          cartItem={cartItem}
                          wishlistItem={wishlistItem}
                          compareItem={compareItem}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              {/* <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                <div className="widget ltn__author-widget">
                  <div className="ltn__author-widget-inner text-center">
                    <img
                      src={`/img/team/${product.agent.img}`}
                      alt={`${product.agent.fullName}`}
                    />
                    <h5>{product.agent.fullName}</h5>
                    <small>{product.agent.designation}</small>
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaRegStar />
                          </a>
                        </li>
                        <li className="review-total">
                          {" "}
                          <Link href="#">
                            {" "}
                            ( {product.agent.raiting} Reviews )
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p>{product.agent.description}</p>

                    <div className="ltn__social-media">
                      <ul>
                        <li>
                          <a href="#" title="Facebook">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Twitter">
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Linkedin">
                            <FaInstagram />
                          </a>
                        </li>

                        <li>
                          <a href="#" title="Youtube">
                            <FaDribbble />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="widget ltn__search-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Search Objects
                  </h4>
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search your keyword..."
                    />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>

                <div className="widget ltn__form-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Drop Messege For Book
                  </h4>
                  <form action="#">
                    <input
                      type="text"
                      name="yourname"
                      placeholder="Your Name*"
                    />
                    <input
                      type="text"
                      name="youremail"
                      placeholder="Your e-Mail*"
                    />
                    <textarea
                      name="yourmessage"
                      placeholder="Write Message..."
                    ></textarea>
                    <button type="submit" className="btn theme-btn-1">
                      Send Messege
                    </button>
                  </form>
                </div>

                <div className="widget ltn__top-rated-product-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Top Rated Product
                  </h4>
                  <ul>
                    {topRatedProducts.map((product, keys) => {
                      const slug = productSlug(product.title);
                      let key = keys + 1;
                      return (
                        <li key={product.id}>
                          <div className="top-rated-product-item clearfix">
                            <div className="top-rated-product-img">
                              <a href={`/${slug}`}>
                                <img
                                  src={`/img/product/${key}.png`}
                                  alt={product.title}
                                />
                              </a>
                            </div>
                            <div className="top-rated-product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <FaStar />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h6>
                                <a href={`/${slug}`}>{product.title}</a>
                              </h6>
                              <div className="product-price">
                                <span>${product.price}</span>
                                <del>${discountedPrice}</del>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Top Categories
                  </h4>
                  <ul>
                    <li>
                      <Link href="#">
                        Apartments <span>(26)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Picture Stodio <span>(30)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Office <span>(71)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Luxary Vilas <span>(56)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Duplex House <span>(60)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget ltn__popular-product-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Popular Properties
                  </h4>
                  <PopulerProperties popularProducts={popularProducts} />
                </div>

                <div className="widget ltn__popular-post-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Leatest Blogs
                  </h4>
                  <ul>
                    {latestdBlogs.map((blog, key) => {
                      const slug = productSlug(blog.title);
                      let imagecount = key + 1;

                      return (
                        <li key={key}>
                          <div className="popular-post-widget-item clearfix">
                            <div className="popular-post-widget-img">
                              <Link href={`/blog/${slug}`}>
                                <img
                                  src={`/img/team/${imagecount}.jpg`}
                                  alt="#"
                                />
                              </Link>
                            </div>
                            <div className="popular-post-widget-brief">
                              <h6>
                                <Link href={`/blog/${slug}`}>{blog.title}</Link>
                              </h6>
                              <div className="ltn__blog-meta">
                                <ul>
                                  <li className="ltn__blog-date">
                                    <Link href={`/blog/${slug}`}>
                                      <span>
                                        <FaCalendarAlt />
                                      </span>
                                      <span>{blog.date}</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <FollowUs title="Follow Us" />

                <Tags title="Popular Tags" />
              </aside> */}
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- SHOP DETAILS AREA END --> */}
    </>
  );
}
