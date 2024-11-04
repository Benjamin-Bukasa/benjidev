import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
//  {
//     path:"apropos",
//     element:<Apropos/>
//   },
//   {
//     path:"services",
//     element:<Services/>
//   },
//   {
//     path:"savoirs",
//     element:<Savoir/>
//   },
//   {
//     path:"portfolio",
//     element:<Portfolio/>
//   },
//   {
//     path:"contact",
//     element:<Contact/>
//   },
//   {
//     path:"adminloginpage",
//     element:<Login/>
//   },
//   {
//     path:"adminpage",
//     element:<Admin/>
//   }, 
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
