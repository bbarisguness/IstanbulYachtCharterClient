import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function BreadContent({ title }) {
  return (
    <div className="bread-content">
      <div className="text">
        <h1 className="title">{title}</h1>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
            <MdOutlineKeyboardArrowRight color="white" />
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}
