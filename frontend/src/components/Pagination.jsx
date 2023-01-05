import React from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <p className="pt-2 text-lg font-bold text-white">Page of {currentPage}</p>
      <p className="py-2 text-slate-300">Total Items {totalItems}</p>
      <ul className="flex flex-row gap-5 py-2 pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="text-lg text-white page-item">
            <button
              onClick={() => handlePageChange(number)}
              className="bg-slate-700 py-2 px-4 hover:bg-slate-600 page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
