import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home, Second, Third } from "./pages";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        {" - "}
        <Link to="/second">Second page</Link>
        {" - "}
        <Link to="/third">Third page</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </Switch>
    </BrowserRouter>
  );
}
