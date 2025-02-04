import React, { useContext, useState } from "react";
import { PostsContextX } from "../../context/PostsContext";
import CardPost from "./CardPost";
import { useNavigate } from "react-router-dom";
import AddPost from "./AddPost";
import { FaCaretLeft } from "react-icons/fa6";


export default function HomePosts() {
  const [showModal, setshowModal] = useState(false);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  // Récupération du contexte
  const posts = useContext(PostsContextX);

  const navigate = useNavigate();
  console.log(posts.Posts.slice(0, 5));
  // Vérification si les posts sont chargés
  if (!posts.Posts) {
    return <div>Loading...</div>;
  }
  const HandleAdd = () => {
    const NewPost = { title, body, userId: 1 };
    AddPost(NewPost);
    setshowModal(false);
  };
  return (
    <div className="px-4 py-4">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn flex items-center justify-center  rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all my-4"
      >
        <span className="text-xl">
          <FaCaretLeft />
        </span>
        <span>Home</span>
      </button>
      {showModal && (
        <AddPost
          posts={posts}
          showModal={showModal}
          setshowModal={setshowModal}
        />
      )}
      {!showModal && (
        <div>
          <h1 className="text-gray-100 text-4xl text-center my-4 z-10">
            Lists of posts
          </h1>
          <button
            className="btn btn-secondary w-full my-2"
            onClick={() => setshowModal(true)}
          >
            Adding New Post
          </button>
          <div className="text-gray-100 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-3">
            {posts.Posts.length > 0 ? (
              posts.Posts.map((post) => <CardPost key={post.id} post={post} />)
            ) : (
              <div>Aucun post pour le moment</div>
            )}
          </div>
          {/* <button
            className="btn btn-secondary w-full my-4"
            onClick={() => navigate("/")}
          >
            Return
          </button> */}
        </div>
      )}
    </div>
  );
}
