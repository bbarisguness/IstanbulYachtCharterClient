'use client'

import ReactPaginate from "react-paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function Paginate() {
  return (
    <ReactPaginate
      // onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={3}
      nextLabel={<FaAngleDoubleRight />}
      previousLabel={<FaAngleDoubleLeft />}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination ltn__pagination justify-content-center"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}
