import React, { useState } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

function Paginatedlist(data) {
  const carModelList = [];
  const usersList = data.data;
  usersList.map((item) => carModelList.push(item.carModel));
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const carModelListFinal = removeDuplicates(carModelList);
  const [show, setShow] = useState(false);
  const [carmodal, setcarModal] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = carModelListFinal.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const selectedPost = (e) => {
    setcarModal(e);
    setShow(true);
  };
  const carUserList = [];
  usersList.map((item) =>
    item.carModel === carmodal ? carUserList.push(item.username) : ""
  );
  const totalpages = Math.ceil(carModelListFinal.length / postsPerPage);
  const nextPage = () => {
    currentPage + 1 <= totalpages
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage);
  };
  const prePage = () => {
    currentPage - 1 === 0
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage - 1);
  };
  return (
    <div style={{ display: "flex", paddingTop: "50px" }}>
      <div style={{ width: "100%", height: "400px" }}>
        <div>
          <h1>My Blog</h1>
          <Posts
            posts={currentPosts}
            loading={loading}
            selectedPost={selectedPost}
          />
          <button onClick={nextPage}>next</button>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={carModelListFinal.length}
            paginate={paginate}
          />
          <button onClick={prePage}>pre</button>
        </div>
      </div>
      <div>
        {show ? (
          <div style={{ width: "400px" }}>
            <h2>Users using the car</h2>
            <ul>
              {carUserList.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <button onClick={() => setShow(false)}>close</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Paginatedlist;
