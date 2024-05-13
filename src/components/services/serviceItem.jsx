import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
const ServiceItem = ({ data, baseUrl, slug, additionalClassname }) => {
  return (
    <>
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="team-img">
          <Link href={`${baseUrl}/${slug}`}>
            <img src={`/img/services/${data.image}`} alt="Image" />
          </Link>
        </div>
        <div className="team-info">
          <h4>
            <Link href={`${baseUrl}/${slug}`}>{data.name}</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
