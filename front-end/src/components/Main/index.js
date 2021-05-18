import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./main.module.scss";
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

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(response);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {posts
          ? posts.map((p, i) => (
              <div className={styles.postDiv} key={i}>
                <h1>{p.title}</h1>
                <div className={styles.postActions}>
                  <Link to={`/post/${p.id}`}>Read more</Link>
                  <i className="bi bi-pencil-square"></i>
                  <i
                    className="bi bi-trash"
                    onClick={(e) => handleDelete(e, p.id)}
                  ></i>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Main;
