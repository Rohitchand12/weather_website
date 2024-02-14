import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BackgroundContextProvider from "./context/BackgroundContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundContextProvider>
      <App />
    </BackgroundContextProvider>
  </React.StrictMode>
);
