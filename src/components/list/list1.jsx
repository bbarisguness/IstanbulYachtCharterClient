"use client";

import { getDiscountPrice, productSlug } from "@/lib/products";
import TitleSection from "../titleSection";
import RelatedProduct from "../product/related-product";
import { Container, Row, Col, Form } from "react-bootstrap";
//import ReactPaginate from "react-paginate";
//import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
//import Search from "../search";

export default function List1({ data, title }) {
  //const { cartItems } = useSelector((state) => state.cart);
  //const { wishlistItems } = useSelector((state) => state.wishlist);
  //const { compareItems } = useSelector((state) => state.compare);
  const cartItems = [];
  const wishlistItems = [];
  const compareItems = [];

  return (
    <>
      <div className="ltn__product-slider-area ltn__product-gutter pt-80">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Tours",
                  title: title || "Tour List",
                }}
              />
            </Col>
          </Row>

          {/* <div className="ltn__shop-options mb-10">
            <ul>
              <li>
                <div className="short-by text-center">
                  <Form.Select
                    className="form-control nice-select"
                    // onChange={(e) =>
                    //   getFilterSortParams("filterSort", e.target.value)
                    // }
                  >
                    <option value="default">Default</option>
                    <option value="priceHighToLow">Price - High to Low</option>
                    <option value="priceLowToHigh">Price - Low to High</option>
                  </Form.Select>
                </div>
              </li>
              <li>
                <div className="showing-product-number text-right">
                  <span>
                    {`Showing 9 of ${
                      35
                    } results`}
                  </span>
                </div>
              </li>
            </ul>
          </div> */}

          {/* <Search spaceBottom="mb-30" /> */}

          <Row>
            {data.map((item, key) => {
              const slug = productSlug(item.title);

              const discountedPrice = getDiscountPrice(
                item.price,
                item.discount
              ).toFixed(2);
              const productPrice = item.price.toFixed(2);
              const cartItem = cartItems.find(
                (cartItem) => cartItem.id === item.id
              );
              const wishlistItem = wishlistItems.find(
                (wishlistItem) => wishlistItem.id === item.id
              );
              const compareItem = compareItems.find(
                (compareItem) => compareItem.id === item.id
              );

              return (
                <Col xs={12} sm={6} xl={4} key={key}>
                  <RelatedProduct
                    productData={item}
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
        </Container>
        {/* <ReactPaginate
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={3}
          nextLabel={<FaAngleDoubleRight />}
          previousLabel={<FaAngleDoubleLeft />}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination ltn__pagination justify-content-center"
          activeClassName="active"
          renderOnZeroPageCount={null}
        /> */}
      </div>
    </>
  );
}
