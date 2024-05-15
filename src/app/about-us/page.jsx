import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import services from "@/data/services.json";
import { getProducts, productSlug } from "@/lib/products";
import Feature from "@/components/features";
import { Container, Row, Col } from "react-bootstrap";
import TitleSection from "@/components/titleSection";
import TeamData from "@/data/teamData.json";
import TeamItem from "@/components/team";
import TestimonialSlider from "@/components/aboutUs/testimonialSlider";
import testimonialData from "@/data/testimonials.json";
import CallToAction from "@/components/callToAction";
import BreadContent from "@/components/breadContent";
import Services from "@/components/services";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About | İstanbul Yacht Charter",
    description: "About us",
  };
}

export default function Page({ params, searchParams }) {
  const agents = getProducts(TeamData, "buying", "featured", 3);
  const featureDataSorted = getProducts(services, "buying", "featured", 3);
  return (
    <>
      {/* <AboutUsStyleOne sectionSpace="pb-90 pt-90" /> */}
      <BreadContent />

      <div className="aboutus-content">
        <Container>
          <p>
            Istanbul Yacht Charter offering exclusive yachts , tailor made
            bosphorus tours.Rent one of our yachts and discover Istanbul &amp;
            Bosphrous from another perspective.
          </p>
          <p>
            Istanbul Yacht Charter was started in the year 2010 by a family
            filled with passion for nautical professionalism determined to
            fulfil the aim and mission of providing the best nautical
            experiences to the customers. Over the years, Istanbul Yacht Charter
            has come a long way. From providing yachts to gulets or mega yachts
            for charter, we have a wide range of options for our clients.
          </p>
          <p>
            Our team comprises similar passionate and dedicated employees who
            strive every day for providing the ultimate experience to our
            customers. We ensure that every employee that we hire has practical
            knowledge and experience in the yachting field.
          </p>
          <p>
            Every day we work diligently so that we can offer an unforgettable
            experience to our clients. It is through the series of aspirations
            followed by hard work over the past decade,that enabled us to create
            a strong reputation in this field. We work hard every day so that
            our clients can continue to visit the most popular destinations via
            Yacht.
          </p>
          <p>
            Having gained experience in the past decade, we are confident enough
            to guarantee you the best experiences in all your endeavours. At our
            goal is to provide our customers with maximum satisfaction and
            ensure they are happy with our services. To further strengthen our
            company's vision, we are very particular about whom we surround
            ourselves with; hence we only surround ourselves with employees
            whose vision aligns with us.
          </p>
          <p>
            We have over 100+ yachts available for our customers and we provide
            holistic services, from renting a yacht to chartering a yacht. We
            offer it all to you. We also offer boats such as covering the whole
            Turkey private boat!
          </p>
          <p>
            We are very versatile and adaptive to the needs of our clients, and
            have a wide range of products to cater your requirements. We have
            yachts available for almost every occasion, from a family gathering
            to a business meeting to luxury events. Along with this, our staff
            are very friendly and make sure to look after each and every client.
          </p>
          <p>
            Over a decade, we have had the opportunity to provide services to
            families, individuals, groups and companies all over the world. We
            have curated activities as per their requirements and have strongly
            focused and worked on small details such as building a team to
            enhance their creativity. We hope to serve you all with the same
            dedication and help you explore Istanbul!
          </p>
        </Container>
      </div>

      {/* <Feature
        classes="section-bg-1"
        servicebtn={true}
        iconTag={false}
        data={featureDataSorted}
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      /> */}

      <Services title={'Our Main Services'} />

      <div className="ltn__team-area pt-115 pb-90">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Team",
                  title: "Property Agents",
                }}
              />
            </Col>
          </Row>

          <Row>
            {agents.map((data, key) => {
              const slug = productSlug(data.name);
              return (
                <Col key={key} xs={12} sm={6} lg={4}>
                  <TeamItem
                    baseUrl="blog"
                    data={data}
                    slug={slug}
                    additionalClassname=""
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-70"
        style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
      >
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses="section-subtitle-2"
                titleSectionData={{
                  subTitle: "Our Testimonial",
                  title: "Clients Feedback",
                }}
              />
            </Col>
          </Row>

          <TestimonialSlider testimonialData={testimonialData} />
        </Container>
      </div>
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
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
