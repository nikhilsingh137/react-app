import { createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import SerachFilterData from "./component/SerachFilterData";
import About from "./component/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Homepage />
      </>
    ),
  },
  {
    path: "/:userData",
    element: (
      <>
        <SerachFilterData />
      </>
    ),
  },
  {
    path: "/about/:userAbout",
    element: <About />,
  },
]);

export default router;
