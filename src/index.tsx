import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./common-component/Header";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
// import SliceData from "./redux/SliceData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
