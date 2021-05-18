import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  let { id } = useParams();
  let history = useHistory();
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
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
          <button onClick={() => history.goBack()}>Go back</button>
        </div>
      )}
    </div>
  );
};

export default Post;
