import {
  CREATE_NEW_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_SINGLE_POST,
  EDIT_POST,
} from "./constants";
import axios from "axios";

export const createNewPost = (title, body) => (dispatch) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", { title, body })
    .then((response) =>
      dispatch({
        type: CREATE_NEW_POST,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};

export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch((error) => console.log(error));
};

export const editPost = (id, title, body) => (dispatch) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body,
    })
    .then((response) => {
      dispatch({
        type: EDIT_POST,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};

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
