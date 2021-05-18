import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";

const Main = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {posts
          ? posts.map((p, i) => (
              <div key={i}>
                <h1>{p.title}</h1>
                <Link to={`/post/${p.id}`}>Read more</Link>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Main;
