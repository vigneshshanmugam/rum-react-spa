import React from "react";
import { ApmRoute } from "@elastic/apm-rum-react";
import { Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import TestPage from "./pages/TestPage";

function NotFound() {
  return <div>Not Found</div>;
}

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/test">TestPage</Link>
        </li>
        <li>
          <Link to="/vigneshshanmugam">vigneshshanamugam</Link> on GitHub.
        </li>
      </ul>
      <Switch>
        <ApmRoute path="/home" component={HomePage} />
        <ApmRoute path="/test" component={TestPage} />
        <ApmRoute path="/:id" component={UserPage} />
        <ApmRoute component={NotFound} />
      </Switch>
    </div>
  );
}
