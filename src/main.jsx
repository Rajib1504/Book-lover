import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import ErrorPage from "./Components/Error Page/ErrorPage";
import Home from "./Components/Home/Home";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import BookDetails from "./Components/BookDetails/BookDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/list",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("./book.json"),
      },
      {
        path: "/read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("./book.json"), //we will not featch all books for one book initially so now learn it but we will not use it so much
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
