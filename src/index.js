import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Home from "./Home";
import Resume from "./components/resume/Resume";
import Timeline from "./components/timeline/Timeline";
import Header from "./components/header/Header";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/timeline" element={<Timeline />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
// reportWebVitals(console.log);
