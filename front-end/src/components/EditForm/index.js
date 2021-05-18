import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost, editPost } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import styles from "./editForm.module.scss";

const EditForm = () => {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [error, setError] = useState("");
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setError("Please enter the title");
    } else if (!body) {
      setError("Please enter the body");
    } else {
      try {
        dispatch(editPost(id, title, body));
        history.push(`/post/${id}`);
      } catch (error) {
        setError("Please enter a valid title and body");
      }
    }
    resetTitle();
    resetBody();
  };

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder={post ? post.title : null}
          {...bindTitle}
        />
        <textarea
          name="body"
          placeholder={post ? post.body : null}
          {...bindBody}
        />
        {error ? <div className={styles.error}>{error}</div> : null}
        <button type="submit">Update post</button>
      </form>
    </div>
  );
};

export default EditForm;
