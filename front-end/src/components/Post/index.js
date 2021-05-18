import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../../redux/actions";
import styles from "./post.module.scss";
import Navbar from "../Navbar";

const Post = () => {
  let { id } = useParams();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {post ? (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to="/">
              <h5>Go back</h5>
            </Link>
          </div>
        ) : (
          <h1>{error}</h1>
        )}
      </div>
    </>
  );
};

export default Post;
