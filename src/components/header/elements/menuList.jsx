import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">HOME</Link>
      </li>
      <li>
        <Link href="/all-tour">TOURS</Link>
      </li>
      <li>
        <Link href="/sunset-cruise">SUNSET CRUISE</Link>
      </li>
      <li>
        <Link href="/wedding-and-events">WEDDING & EVENTS</Link>
      </li>
      <li>
        <Link href="/all-yacht">OUR YACHTS</Link>
      </li>
      <li>
        <Link href="/contact">CONTACT</Link>
      </li>
      {addListing ? (
        <li className="special-link">
          <Link href="/add-listing">Add Listing</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
