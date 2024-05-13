'use client'

import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

export default function FloorPlans() {
  return (
    <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
      <Tab.Container defaultActiveKey="first">
        <div className="ltn__tab-menu ltn__tab-menu-3">
          <Nav className="nav">
            <Nav.Link eventKey="first">First Floor</Nav.Link>
            <Nav.Link eventKey="second">Second Floor</Nav.Link>
            <Nav.Link eventKey="third">Third Floor</Nav.Link>
            <Nav.Link eventKey="fourth">Top Garden</Nav.Link>
          </Nav>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="ltn__apartments-tab-content-inner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="apartments-plan-img">
                    <img src="/img/others/10.png" alt="#" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="apartments-plan-info">
                    <h2>First Floor</h2>
                    <p>
                      Enimad minim veniam quis nostrud exercitation ullamco
                      laboris. Lorem ipsum dolor sit amet cons aetetur
                      adipisicing elit sedo eiusmod tempor.Incididunt labore et
                      dolore magna aliqua. sed ayd minim veniam.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product-details-apartments-info-list  section-bg-1">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Belcony/Pets</label>
                              <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label>
                              <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="ltn__product-tab-content-inner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="apartments-plan-img">
                    <img src="/img/others/10.png" alt="#" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="apartments-plan-info">
                    <h2>Second Floor</h2>
                    <p>
                      Enimad minim veniam quis nostrud exercitation ullamco
                      laboris. Lorem ipsum dolor sit amet cons aetetur
                      adipisicing elit sedo eiusmod tempor.Incididunt labore et
                      dolore magna aliqua. sed ayd minim veniam.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product-details-apartments-info-list  section-bg-1">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Belcony/Pets</label> <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label> <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <div className="ltn__product-tab-content-inner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="apartments-plan-img">
                    <img src="/img/others/10.png" alt="#" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="apartments-plan-info">
                    <h2>Third Floor</h2>
                    <p>
                      Enimad minim veniam quis nostrud exercitation ullamco
                      laboris. Lorem ipsum dolor sit amet cons aetetur
                      adipisicing elit sedo eiusmod tempor.Incididunt labore et
                      dolore magna aliqua. sed ayd minim veniam.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product-details-apartments-info-list  section-bg-1">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Belcony/Pets</label> <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label> <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <div className="ltn__product-tab-content-inner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="apartments-plan-img">
                    <img src="/img/others/10.png" alt="#" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="apartments-plan-info">
                    <h2>Top Garden</h2>
                    <p>
                      Enimad minim veniam quis nostrud exercitation ullamco
                      laboris. Lorem ipsum dolor sit amet cons aetetur
                      adipisicing elit sedo eiusmod tempor.Incididunt labore et
                      dolore magna aliqua. sed ayd minim veniam.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product-details-apartments-info-list  section-bg-1">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Total Area</label> <span>2800 Sq. Ft</span>
                            </li>
                            <li>
                              <label>Bedroom</label> <span>150 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-info-list apartments-info-list-color">
                          <ul>
                            <li>
                              <label>Belcony/Pets</label> <span>Allowed</span>
                            </li>
                            <li>
                              <label>Lounge</label> <span>650 Sq. Ft</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
