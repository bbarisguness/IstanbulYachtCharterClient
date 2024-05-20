import { parseDate, parseDateToTime } from "@/utils";

export default function ReservationDetails({ details }) {
  return (
    <>
      <h4 className="title-2">Reservation Details</h4>
      <ul className="list-group mb-3">
        <li className="list-group-item">
          <div>
            <h6 className="my-0" style={{ textAlign: "center" }}>
              {details.name}
            </h6>
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed mt-0">
          <div>
            <h6 className="my-0">Start Date </h6>
          </div>
          <span className="text-muted">
            {parseDate(new Date(details.date))}
          </span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed mt-0">
          <div>
            <h6 className="my-0">Start Hour </h6>
          </div>
          <span className="text-muted">
            {parseDateToTime(new Date(details.startTime))}
          </span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed mt-0">
          <div>
            <h6 className="my-0">End Hour </h6>
          </div>
          <span className="text-muted">
            {parseDateToTime(new Date(details.endTime))}
          </span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light mt-0">
          <div>
            <h6 className="my-0" style={{ color: "#198754" }}>
              Trip Time{" "}
            </h6>
          </div>
          <span style={{ color: "#198754" }}>0 </span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total Price</span>
          <strong>400.00€</strong>
        </li>
      </ul>
    </>
  );
}
