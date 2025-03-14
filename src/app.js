import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import ShimmerUI from "./components/ShimmerUI";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(()=> import("./components/About"));
const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <div className="body-container">
        <Outlet />
      </div>
    </div>
  );
};

// ✅ Define router properly
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element:
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element:
          <Suspense fallback={<div><ShimmerUI /></div>}>
            <Instamart />
          </Suspense>,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// ✅ Correct way to get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
