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
      },
      {
        path: "/read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("./book.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
