import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../../redux/actions";
import styles from "./post.module.scss";
import Navbar from "../Navbar";

const Post = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {Object.keys(post).length < 1 ? (
          <h1>This post does not exist</h1>
        ) : (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
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
