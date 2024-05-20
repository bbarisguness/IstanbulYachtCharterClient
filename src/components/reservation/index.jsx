"use client";

import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FaCarAlt, FaUserAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { BsClockFill } from "react-icons/bs";

const ReservationSchema = Yup.object().shape({
  date: Yup.date().required(),
  startTime: Yup.date().required(),
  endTime: Yup.date().required(),
});

export default function Reservation({ navMenuClass, customClasses, data }) {
  const router = useRouter();
  return (
    <>
      <div className={`ltn__car-dealer-form-area ${customClasses}`}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__car-dealer-form-tab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div
                    className={`ltn__tab-menu text-uppercase ${navMenuClass}`}
                  >
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <FaCarAlt />
                          Find A Car
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <FaUserAlt />
                          Get a Dealer
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <Tab.Content className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                    <Tab.Pane eventKey="first">
                      <div className="car-dealer-form-inner">
                        <Formik
                          initialValues={{
                            date: null,
                            startTime: null,
                            endTime: null,
                          }}
                          validationSchema={ReservationSchema}
                          onSubmit={(values, actions) => {
                            console.log(values);
                            router.push("/reservation");
                            localStorage.setItem(
                              "reservation",
                              JSON.stringify({
                                date: values.date,
                                startTime: values.startTime,
                                endTime: values.endTime,
                                name: data.title,
                              })
                            );
                          }}
                        >
                          {({
                            errors,
                            touched,
                            values,
                            setFieldValue,
                            handleChange,
                          }) => (
                            <Form className="ltn__car-dealer-form-box">
                              <Row>
                                <Col
                                  xs={12}
                                  md={6}
                                  lg={3}
                                  className="ltn__car-dealer-form-item"
                                >
                                  <DatePicker
                                    minDate={new Date()}
                                    autoComplete="off"
                                    name="date"
                                    showIcon
                                    toggleCalendarOnIconClick
                                    wrapperClassName="myCalendarWrapper"
                                    calendarIconClassname="myCalendarInputIcon"
                                    selected={values.date}
                                    onChange={(date) =>
                                      setFieldValue("date", date)
                                    }
                                    placeholderText="Select date"
                                    className={`myCalendarInput ${
                                      errors.date && touched.date && "invalid"
                                    }`}
                                    onKeyDown={(e) => e.preventDefault()}
                                  />
                                </Col>
                                <Col
                                  xs={12}
                                  md={6}
                                  lg={3}
                                  className="ltn__car-dealer-form-item"
                                >
                                  <DatePicker
                                    toggleCalendarOnIconClick
                                    icon={<BsClockFill />}
                                    showIcon
                                    autoComplete="off"
                                    name="startTime"
                                    wrapperClassName="myCalendarWrapper"
                                    calendarIconClassname="myCalendarInputIcon"
                                    className={`myCalendarInput ${
                                      errors.startTime &&
                                      touched.startTime &&
                                      "invalid"
                                    }`}
                                    selected={values.startTime}
                                    onChange={(date) =>
                                      setFieldValue("startTime", date)
                                    }
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    placeholderText="Select start time"
                                    onKeyDown={(e) => e.preventDefault()}
                                  />
                                </Col>
                                <Col
                                  xs={12}
                                  md={6}
                                  lg={3}
                                  className="ltn__car-dealer-form-item"
                                >
                                  <DatePicker
                                    icon={<BsClockFill />}
                                    toggleCalendarOnIconClick
                                    showIcon
                                    autoComplete="off"
                                    name="endTime"
                                    wrapperClassName="myCalendarWrapper"
                                    calendarIconClassname="myCalendarInputIcon"
                                    className={`myCalendarInput ${
                                      errors.endTime &&
                                      touched.endTime &&
                                      "invalid"
                                    }`}
                                    selected={values.endTime}
                                    onChange={(date) =>
                                      setFieldValue("endTime", date)
                                    }
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    placeholderText="Select end time"
                                    disabled={values.startTime == null}
                                    minTime={values.startTime}
                                    maxTime={new Date(
                                      values.startTime
                                    ).setHours(23, 30, 0)}
                                    onKeyDown={(e) => e.preventDefault()}
                                  />
                                </Col>
                                <Col
                                  xs={12}
                                  md={6}
                                  lg={3}
                                  className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar"
                                >
                                  <div className="btn-wrapper text-center mt-0">
                                    <button
                                      type="submit"
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                      style={{ zIndex: 0 }}
                                    >
                                      Reservation
                                    </button>
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
