import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => (
        <span key={number} className="page-item">
          <button onClick={() => paginate(number)}>{number}</button>
        </span>
      ))}
    </>
  );
};

export default Pagination;
