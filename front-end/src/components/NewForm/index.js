import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../redux/actions";
import styles from "./newForm.module.scss";

const NewForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
        dispatch(createNewPost(title, body));
        history.push("/");
      } catch (error) {
        setError("Please enter a valid title and body");
      }
    }
    resetTitle();
    resetBody();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title..." {...bindTitle} />
        <textarea name="body" placeholder="Body..." {...bindBody} />
        {error ? <div className={styles.error}>{error}</div> : null}
        <button type="submit">Create new post</button>
      </form>
    </div>
  );
};

export default NewForm;
