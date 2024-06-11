import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import ConfiguratorPages from "./Pages/ConfiguratorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/configuratorpages",
    element: <ConfiguratorPages />,
  },
]);

export default router;
