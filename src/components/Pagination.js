import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, carsPerPage, totalCars, onPageChange }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalCars / carsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className="nav">
      <ul className="ul pagination">
        <li className={`li page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="button page-link" onClick={handlePrevPage}>
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`li page-item ${currentPage === number ? 'active' : ''}`}
          >
            <button
              className="button page-link"
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className={`li page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="button page-link" onClick={handleNextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
