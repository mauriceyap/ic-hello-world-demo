import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/Home";
import { LivePricePage } from "./pages/LivePrice";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/pricing">
          <LivePricePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
