import React ,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import CategoryPosts from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import Logout from "./pages/Logout";
import WebFont from "webfontloader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      { key:"1", path: "posts/:id", element: <PostDetail /> },
      { key:"2", path: "register", element: <Register /> },
      { key:"3", path: "login", element: <Login /> },
      { key:"4", path: "profile/:id", element: <UserProfile /> },
      { key:"5", path: "authors", element: <Authors /> },
      { key:"6", path: "create", element: <CreatePost /> },
      { key:"7", path: "posts/categories/:category", element: <CategoryPosts /> },
      { key:"8", path: "posts/users/:id", element: <AuthorPosts /> },
      { key:"9", path: "myposts/:id", element: <Dashboard /> },
      { key:"10", path: "posts/:id/edit", element: <EditPost /> },
      { key:"11", path: "posts/:id/delete", element: <DeletePost /> },
      { key:"12", path: "logout", element: <Logout /> },

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

const LayoutWithFonts = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:300,400,500,600,700"],
      },
    });
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
root.render(<LayoutWithFonts />);