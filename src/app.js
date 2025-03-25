import React, { createContext, lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import ShimmerUI from "./components/ShimmerUI";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartItems from "./components/CartItems";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Shivam Likhar",
    }
    setUserName(data.name);
  }, [])
  return (
    // Store works as a props to all the components in the app
    <Provider store={appStore}>

      {/* // From userContext.Provide we can provide context data to all compontents in the app which are under this provider
    // Whatever we enter ib value that first go to userConext context file & update the existing json so that from other 
    // file they can update the data by using userConext File itself */}
      {/* someContext.Provider provide the existing context value to the component & we can update the exiting value as well by providing 
    new value to value as a props so that it will get updated to main Context then it will get render into deep components*/}
      {/* someContext.Consumer is raerly use to read context value, it is used in only class based components */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>   {/* Here setUserName will fist update the userContext so that we can access it everywhere across the app by using useContext */}
        < div className="appLayout" >
          <Header />
          <div className="body-container">
            <Outlet />
          </div>
        </div >
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
    errorElement: <Error />,
  },
]);

// ✅ Correct way to get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
