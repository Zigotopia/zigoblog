import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Post from "./routes/Post";
import NewPost from "./routes/NewPost";

const Global = createGlobalStyle`
  ${reset}

 
   body {
    background-color: black;
     font-family: 'Blinker', sans-serif
   ;;
    color: white;

    
    
  
     a{
      text-decoration: none;
      color: white;
    
     
  
  }
}
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },

      {
        path: "/newpost",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);
