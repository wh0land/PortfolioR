import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Posts from "./routes/posts";
import Write from "./routes/write";
import Home from "./routes/home";
import Login from "./routes/login";
import Signup from "./routes/signup";


/* existing imports */
import Root from "./routes/root";
import PostDetail from "./routes/postdetail";
import Loginsuccess from "./login-success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [  {
      index: true,
      element: <Home />,
    },
    {
      path: "/posts",
      element: <Posts/>,
    },
    {
      path: "/write",
      element: <Write/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/posts/:postid",
      element: <PostDetail/>,
    },
    {
      path: "/loginsuccess",
      element: <Loginsuccess/>,
    }  ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);