import React from "react";
import { ApmRoute } from "@elastic/apm-rum-react/dist/lib/index";
import { Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import TestPage from "./pages/TestPage";

export default function App() {
  return (
    <Switch>
      <ApmRoute exact path="/" component={HomePage} />
      <ApmRoute path="/test" component={TestPage} />
      <ApmRoute path="/:id" component={UserPage} />
    </Switch>
  );
}
