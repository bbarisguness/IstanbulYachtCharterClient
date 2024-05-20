"use client";

import { Col, Container, Row } from "react-bootstrap";
import ReservationForm from "@/components/reservation/reservationForm";
import ReservationDetails from "@/components/reservation/reservationDetails";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// export async function generateMetadata({ params, searchParams }, parent) {
//   return {
//     title: "Reservation | İstanbul Yacht Charter",
//     description: "Reservation",
//   };
// }

export default function Page() {
  const router = useRouter();
  const [reservationData, setReservationData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("reservation")) {
      setReservationData(JSON.parse(localStorage.getItem("reservation")));
    } else {
      router.push("/");
    }
  }, []);

  if (reservationData != null)
    return (
      <Container className="mt-50">
        <Row>
          <Col xs={12} lg={8} className="order-lg-0 order-sm-1 order-1">
            <ReservationForm />
          </Col>
          <Col xs={12} lg={4} className="mb-lg-0 mb-5">
            <ReservationDetails details={reservationData} />
          </Col>
        </Row>
      </Container>
    );
}
