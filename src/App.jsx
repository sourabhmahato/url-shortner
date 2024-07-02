import { Children, useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
      {
        path: '/',
        element: <LandingPage />
      }
    ],
	},
]);
function App() {
	return (
		<>
			<div className="text-2xl">new project</div>
		</>
	);
}

export default App;
