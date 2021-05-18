import { Route, Switch } from "react-router-dom";
import "./styles.scss";

import Main from "./components/Main";
import Post from "./components/Post";
import NewForm from "./components/NewForm";
import EditForm from "./components/EditForm";

const App = () => {
  return (
    <Switch>
      <Route path="/newPost" component={NewForm} />
      <Route path="/editPost/:id" component={EditForm} />
      <Route path="/post/:id" component={Post} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default App;
