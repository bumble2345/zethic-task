import React from "react";

const Posts = (props) => {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  const setValue = (value) =>{
    props.selectedPost(value)
  }

  return (
    <ul className="list-group mb-4">
      {props.posts.map((post) => (
        <li>
          <button key={post} onClick={()=>setValue(post)}>
            {post}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
