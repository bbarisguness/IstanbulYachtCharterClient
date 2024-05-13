import { Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

export default function Page() {
  return (
    <>
      <ShopBreadCrumb
        title="Terms & Conditions"
        sectionPace=""
        currentSlug="Terms & Conditions"
      />
      <div className="container terms-conditions">
        <Row>
          <Col
            xs={12}
            lg={12}
            style={{
              border: "1px solid black",
              padding: "15px",
              borderRadius: 5,
            }}
          >
            <h6 style={{ borderBottom: "1px solid black", paddingBottom: 10 }}>
              Terms & Conditions
            </h6>
            <p>
              The Terms and Conditions of this site is an agreement that legally
              binds you with the terms at Istanbul Limousine. At Istanbul
              Limousine, we commit to convert your entire experience into a
              positive and enriching one.
            </p>
            <p>
              <strong>Services</strong>
            </p>
            <p>
              Once you login to our website, you have the liberty to choose a
              personal login email and you may also assign a password for your
              profile. We may assign a password for your profile. But you have
              the option to change the password whenever you wish to. Once you
              provide us with information on the type of vehicle you wish to
              engage, we get back with you with a list of available options.
            </p>
            <p>
              Although we will make every effort to ensure that you avail
              nothing short of the most premium services, we would want you to
              understand that we deal with an overwhelming number of clients on
              certain occasions. On these instances, we might not e able to
              deliver you the precise services that you need. We will however
              make it a point to inform you about the changes well in advance.
            </p>
            <p>
              At Istanbul Limousine, we attach nonpareil importance to your
              privacy. All personal information that you share with us is
              treated confidentially. We will, in no event sell your information
              to any third party.
            </p>
            <p>
              <strong>Data Security</strong>
            </p>
            <p>
              We share your concern about security of data. We make every effort
              towards ensuring the security of the data that you provide us. But
              no transmission of data over the internet can be deemed completely
              secure. Therefore, we will not be accountable for any leak of
              confidential information during internet transmissions.
            </p>
            <p>
              <strong>Information provided by you</strong>
            </p>
            <p>
              In the process of using our website, we may ask you to provide
              some information about yourself. The information that you pass on
              to us when you fill out the query form at our website is one such
              way. We reassure you that such information provided by you will be
              treated with utmost confidentiality. Once we receive data
              containing your personal information, your data is stored securely
              within our company servers. Information provided by you is handled
              only by our trusted website professionals.
            </p>
            <p>
              <strong>Information we gather</strong>
            </p>
            <p>
              Apart from the information that you provide to us, we also gather
              some information on our own. We gather these pieces of information
              primarily through the use of cookies. Using cookies, we take down
              some generic information including. Your physical location along
              with the local time when you log in to our site is one of the
              first things we monitor. Then, we also like to keep a track of the
              number of unique visitors to our website. Cookies are also used to
              note the browser that you are using to log into our site. We also
              use cookies to figure out the time that you spend on our site.
            </p>
            <p>
              The intention behind use of cookies is purely to ensure that you
              have a better experience when you visit our site. If you do not
              wish to be tracked by these cookies, you always have the option to
              deactivate them in your browser setting.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
