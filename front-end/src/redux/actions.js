import {
  CREATE_NEW_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_SINGLE_POST,
} from "./constants";
import axios from "axios";

export const creteNewPost = (data) => ({
  type: CREATE_NEW_POST,
  payload: data,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>
      dispatch({
        type: FETCH_POSTS,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};

export const fetchSinglePost = (id) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) =>
      dispatch({ type: FETCH_SINGLE_POST, payload: response.data })
    )
    .catch((error) => console.log(error));
};
