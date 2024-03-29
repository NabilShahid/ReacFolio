import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import MainScroller from "./components/MainScroller/mainscroller";
import { recordUserVisit } from "./services/api";
ReactDOM.render(<MainScroller />, document.getElementById("root"));
recordUserVisit();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
