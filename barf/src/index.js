import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import DogData from './data-containers/DogData/DogData';
import Dogs from './components/Dogs/Dogs';

import registerServiceWorker from "./registerServiceWorker";

const DogsWithData = DogData(Dogs);

ReactDOM.render(
<div>
    <h1 className="page-title">WDC DOG DASHBOARD</h1>
<DogsWithData />
</div>, document.getElementById("root"));
registerServiceWorker();
