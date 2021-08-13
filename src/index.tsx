import { datadogRum } from "@datadog/browser-rum";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

datadogRum.init({
  applicationId: "xxx",
  clientToken: "xxx",
  trackViewsManually: true,
  beforeSend: ({ type, view: { name, url } }) => {
    if (type === "view") {
      console.log({ name, url });
    }
  },
});

datadogRum.startView("initial");

ReactDOM.render(<App />, document.getElementById("root"));
