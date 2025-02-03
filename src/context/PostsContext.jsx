import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const PostsContextX = createContext();

export default function PostsProvider({ children }) {
  const [Posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
        setLoading(false);

        console.log("Posts fetched successfully", Posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const DeletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        // console.log(res.data);
        // setPosts(Posts.filter((post) => post.id !== id));
        setPosts((prev) => prev.filter((pst) => pst.id !== id));
      });
  };

  const AddPost = (post) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then((res) => {
        setPosts((prv)=>[...prv , res.data]);
      });
  };

  const UpdatePost = (post) => {
    axios
    .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
    .then((res)=>{
      setPosts((prv)=> prv.map((pst)=>pst.id === post.id ? post :pst))
    })
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <PostsContextX.Provider value={{ Posts, DeletePost ,AddPost , UpdatePost }}>
      {children}
    </PostsContextX.Provider>
  );
}
