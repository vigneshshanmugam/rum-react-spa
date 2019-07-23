import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { init } from "@elastic/apm-rum";
import App from "./App";

init({
  debug: true,
  serviceName: "spa",
  serverUrl: "http://localhost:8001"
});

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
