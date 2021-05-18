import { Route, Switch } from "react-router-dom";
import "./styles.scss";

import Main from "./components/Main";
import Post from "./components/Post";
import NewForm from "./components/NewForm";

const App = () => {
  return (
    <Switch>
      <Route path="/newPost" component={NewForm} />
      <Route path="/post/:id" component={Post} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default App;
