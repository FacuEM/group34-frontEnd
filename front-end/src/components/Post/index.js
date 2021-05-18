import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./post.module.scss";
import Navbar from "../Navbar";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError("The post you are looking for does not exist");
      }
    };
    fetchPost();
  }, []);
  const { title, body } = post;
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to="/">
              <h5>Go back</h5>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
