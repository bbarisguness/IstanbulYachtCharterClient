import List1 from "@/components/list/list1";
import listData from "@/data/products.json";
import Paginate from "@/components/paginate";
import CallToAction from "@/components/callToAction";
import { Container, Row, Col } from "react-bootstrap";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "All tours",
    description: "all tours",
  };
}

export default function Page({ params, searchParams }) {
  return (
    <>
      <List1 data={listData} />
      <Paginate />
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom mt-50">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
