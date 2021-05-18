import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../../redux/actions";
import styles from "./main.module.scss";
import Navbar from "../Navbar";

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    dispatch(deletePost(id));
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
                  <Link to={`/editPost/${p.id}`}>
                    <i className="bi bi-pencil-square"></i>
                  </Link>
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
