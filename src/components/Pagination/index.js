import React from "react";
import "./style.css";

const Pagination = ({
  previosPage,
  navigatePage,
  nextPage,
  totalPages,
  page,
  variant,
}) => {
  const range = () => {
    const i = [];
    for (let index = 1; index <= totalPages; index++) {
      i.push(index);
    }
    return i;
  };
  return (
    <ul className="pagination">
      <li>
        <button
          disabled={page === 1}
          className="pagination-first"
          onClick={() => previosPage()}
        >
          &laquo;
        </button>
      </li>
      {range().map((range) => {
        return (
          <li key={range}>
            <button
              className={`pagination-element ${
                range === page ? "pagination-active" : ""
              } ${variant}`}
              onClick={() => navigatePage(range)}
            >
              {range}
            </button>
          </li>
        );
      })}
      <li>
        <button
          disabled={page === totalPages}
          className="pagination-last"
          onClick={() => nextPage()}
        >
          &raquo;
        </button>
      </li>
    </ul>
  );
};

export { Pagination };
