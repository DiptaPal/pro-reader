import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "./About";
import BookDetails from "./BookDetails";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, 
        element: <Home/>
      },
      {
        path: '/home', 
        element: <Home/>
      },
      {
        path: '/books',
        loader: async () => {
          return fetch('https://api.itbook.store/1.0/new')
        },
        element: <Books></Books>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/book/:bookID',
        element: <BookDetails></BookDetails>,
        loader: async ({params}) => {
          return fetch(`https://api.itbook.store/1.0/books/${params.bookID}`)
        }

      }
    ]
  }
])