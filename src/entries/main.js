import React from "react";
import { render } from "react-dom";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/start/theme.css";
import "font-awesome/css/font-awesome.css";

import Home from "../pages/containers/home";

const homeContainer = document.getElementById("home-container");

render(<Home />, homeContainer);
