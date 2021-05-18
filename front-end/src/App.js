import { Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Post from "./components/Post";

const App = () => {
  return (
    <Switch>
      <Route path="/post/:id" component={Post} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
};

export default App;
