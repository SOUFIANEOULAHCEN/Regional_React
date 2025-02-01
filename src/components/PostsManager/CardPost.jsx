import React, { useContext } from "react";
import { PostsContextX } from "../../context/PostsContext";

export default function CardPost(props) {
  const { DeletePost } = useContext(PostsContextX);

  const handleDelete = () => {
    DeletePost(props.post.id);
  };

  return (
    <div className="card w-auto shadow-xl bg-gray-600">
      <div className="card-body">
        <h2 className="card-title font-bold">{props.post.title}</h2>
        <p>{props.post.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}