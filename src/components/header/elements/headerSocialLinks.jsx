import Link from 'next/link';

import { FaDribbble,FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa';
const HeaderSocialLinks = function () {
  return (
    <div className="ltn__social-media">
      <ul>
        <li>
          <Link href="https://www.facebook.com/Istanbul-Yacht-Charter-111833137345274" target='_blank'>  <FaFacebookF /> </Link>
        </li>
        <li>
          <Link href="https://twitter.com/yacht_istanbul" target='_blank'>  <FaTwitter /> </Link>
        </li>

        <li>
          <Link href="https://www.instagram.com/yachtcharteristanbul" target='_blank'>  <FaInstagram /> </Link>
        </li>
        {/* <li>
          <Link href="#">  <FaDribbble /> </Link>
        </li> */}
      </ul>
    </div>
  );
};


export default HeaderSocialLinks;