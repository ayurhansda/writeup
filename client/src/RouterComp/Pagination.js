import "./PaginationStyles.css";
import React from "react";

const Pagination = () => {
  return(
  <div className="mt-4">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link text-light bg-dark">Previous</a>
        </li>
        <li className="page-item"><a className="page-link active bg-dark text-light" href="#">1</a></li>
        <li className="page-item"><a className="page-link bg-dark text-light" href="#">2</a></li>
        <li className="page-item"><a className="page-link bg-dark text-light" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link text-light bg-dark" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  );
}

export default Pagination;
