import {
  CREATE_NEW_POST,
  DELETE_POST,
  FETCH_POSTS,
  FETCH_SINGLE_POST,
} from "./constants";

const initialState = {
  posts: [],
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return {
        posts: [...state.posts.filter((post) => post.id !== action.payload)],
      };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case FETCH_SINGLE_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}
