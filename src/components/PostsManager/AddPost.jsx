import React, { useContext, useState } from "react";
import { PostsContextX } from "../../context/PostsContext";
export default function AddPost(props) {
  const {AddPost} = useContext(PostsContextX);

  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const HandleAdd = () => {
    const NewPost = { title, body, userId: 1 };
    AddPost(NewPost);
    props.setshowModal(false);
  };
  return (
    <div className="bg-gray-500 bg-opacity-55 h-screen w-full z-50 rounded-lg flex justify-center items-center flex-col">
      <div className="bg-gray-100 bg-opacity-40 rounded-lg p-4 w-2/4 h-auto text-gray-100">
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="w-full bg-gray-100 text-gray-900 rounded-lg py-3 px-3"
          placeholder="title"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setbody(e.target.value)}
          className="w-full bg-gray-100 text-gray-900 rounded-lg py-3 mt-2 px-3"
          placeholder="body"
        />
        <button className="btn btn-secondary w-full mt-2" onClick={HandleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
